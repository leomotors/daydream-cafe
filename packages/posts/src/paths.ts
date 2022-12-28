import fs from "node:fs/promises";

export async function writeStaticPaths(files: string[]) {
  await fs.writeFile(
    "dist/staticPaths.js",
    `
/** @type {Array<\`/\${string}\`>} */
const staticPaths = [
  ${files.map((file) => `"/post/${file.replace(".md", "")}"`).join(",")}
]

export default staticPaths;
`
  );
}
