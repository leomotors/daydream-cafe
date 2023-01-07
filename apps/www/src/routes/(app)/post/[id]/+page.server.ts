import fs from "node:fs/promises";

import mk from "@traptitech/markdown-it-katex";
import MarkdownIt from "markdown-it";
import mhl from "markdown-it-highlightjs";

import type { PageServerLoad } from "./$types";

const md = MarkdownIt({ html: true });

md.use(mk);
md.use(mhl);

async function renderPost(file: string) {
  const content = await fs.readFile(file, "utf-8");
  const html = md.render(content);

  return html;
}

export const load = (async ({ params }) => {
  return {
    content: await renderPost(`../../packages/posts/posts/${params.id}.md`),
  };
}) satisfies PageServerLoad;
