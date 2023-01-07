import fs from "node:fs/promises";

import mk from "@traptitech/markdown-it-katex";
import fm from "front-matter";
import MarkdownIt from "markdown-it";
import mhl from "markdown-it-highlightjs";
import z from "zod";

import type { PageServerLoad } from "./$types";

const md = MarkdownIt({ html: true });

md.use(mk);
md.use(mhl);

const frontmatter = z.object({
  title: z.string(),
  description: z.string(),
  updated: z.string().optional(),
});

function parseMarkdown(content: string) {
  const parsed = fm(content);
  const meta = frontmatter.parse(parsed.attributes);

  return { meta, body: parsed.body };
}

export const load = (async ({ params }) => {
  const file = `../../packages/posts/posts/${params.id}.md`;
  const content = await fs.readFile(file, "utf-8");
  const { meta, body } = parseMarkdown(content);

  return {
    content: md.render(body),
    meta,
  };
}) satisfies PageServerLoad;
