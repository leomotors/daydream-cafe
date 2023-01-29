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
  updated: z.union([z.string(), z.number()]).optional(),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

function parseMarkdown(content: string) {
  const parsed = fm(content);
  const meta = frontmatter.parse(parsed.attributes);

  return { meta, body: parsed.body };
}

function l(s: string | number) {
  return s.toString().padStart(2, "0");
}

function getDate(title: string | number) {
  const date = title.toString().split("-")[0];

  const yy = +date.slice(0, 2);
  const mm = +date.slice(2, 4);
  const dd = +date.slice(4, 6);

  if (isNaN(yy) || isNaN(mm) || isNaN(dd)) {
    throw new Error(`Failed to parse ${title}`);
  }

  return `20${yy}-${l(mm)}-${l(dd)}`;
}

export const load = (async ({ params }) => {
  const file = `../../packages/posts/posts/${params.id}.md`;
  const content = await fs.readFile(file, "utf-8");
  const { meta, body } = parseMarkdown(content);

  return {
    content: md.render(body),
    meta: {
      ...meta,
      writtenAt: getDate(params.id),
      updated: meta.updated ? getDate(meta.updated) : undefined,
    },
  };
}) satisfies PageServerLoad;
