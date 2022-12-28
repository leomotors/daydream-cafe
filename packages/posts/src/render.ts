import fs from "node:fs/promises";

import mk from "@traptitech/markdown-it-katex";
import MarkdownIt from "markdown-it";
import mhl from "markdown-it-highlightjs";

const md = MarkdownIt({ html: true });

md.use(mk);
md.use(mhl);

export async function renderPosts(files: string[]) {
  for (const file of files) {
    const content = await fs.readFile(`posts/${file}`, "utf-8");

    const html = md
      .render(content)
      .replaceAll("{", "&#123;")
      .replaceAll("}", "&#125;");

    await fs.writeFile(`dist/${file}.svelte`, html);
  }

  function t(s: string) {
    return s.replaceAll(/[^a-zA-Z0-9_]/g, "_");
  }

  await fs.writeFile(
    "dist/index.ts",
    `${files
      .map((file) => `import Component_${t(file)} from "./${file}.svelte"`)
      .join("\n")}

export const posts = {
${files
  .map((file) => `"${file.split(".").slice(0, -1)}": Component_${t(file)}`)
  .join(",\n")}
}
`
  );
}
