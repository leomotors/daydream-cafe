// Use Bun to run this!
/// <reference types="bun-types" />

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const UI_COMPONENTS_PATH = join(import.meta.dir, "..", "packages", "ui", "src");

// Patterns to match and replace
const PATTERNS_TO_REPLACE = [
  { from: /\$libs\/utils\.js/g, to: "@repo/ui/utils" },
  { from: /\$libs\/utils/g, to: "@repo/ui/utils" },
  { from: /\$lib\/utils\.js/g, to: "@repo/ui/utils" },
  { from: /\$lib\/utils/g, to: "@repo/ui/utils" },
];

/**
 * Recursively scan directory for .svelte and .ts files
 */
async function* scanDirectory(dir: string): AsyncGenerator<string> {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      yield* scanDirectory(fullPath);
    } else if (
      entry.isFile() &&
      (entry.name.endsWith(".svelte") || entry.name.endsWith(".ts"))
    ) {
      yield fullPath;
    }
  }
}

/**
 * Fix imports in a single file
 */
async function fixImportsInFile(filePath: string): Promise<boolean> {
  const content = await readFile(filePath, "utf-8");
  let newContent = content;
  let hasChanges = false;

  for (const pattern of PATTERNS_TO_REPLACE) {
    if (pattern.from.test(newContent)) {
      newContent = newContent.replace(pattern.from, pattern.to);
      hasChanges = true;
    }
  }

  if (hasChanges) {
    await writeFile(filePath, newContent, "utf-8");
    return true;
  }

  return false;
}

/**
 * Main function
 */
async function main() {
  console.log("🔍 Scanning UI components for incorrect imports...\n");

  let filesScanned = 0;
  let filesFixed = 0;

  for await (const filePath of scanDirectory(UI_COMPONENTS_PATH)) {
    filesScanned++;
    const relativePath = filePath.replace(
      join(import.meta.dir, "..") + "/",
      "",
    );

    const wasFixed = await fixImportsInFile(filePath);

    if (wasFixed) {
      filesFixed++;
      console.log(`✅ Fixed: ${relativePath}`);
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Files scanned: ${filesScanned}`);
  console.log(`   Files fixed: ${filesFixed}`);

  if (filesFixed > 0) {
    console.log(
      `\n✨ Successfully replaced $libs/utils imports with @repo/ui/utils`,
    );
  } else {
    console.log(`\n✨ No files needed fixing - all imports are correct!`);
  }
}

main().catch((error) => {
  console.error("❌ Error:", error);
  process.exit(1);
});
