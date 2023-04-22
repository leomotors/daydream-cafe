import fs from "node:fs/promises";

import mk from "@traptitech/markdown-it-katex";
import fm from "front-matter";
import MarkdownIt from "markdown-it";
import mhl from "markdown-it-highlightjs";
import z from "zod";

import { getDate } from "./utils";

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

export async function getPost(id: string) {
  const file = `../../packages/posts/posts/${id}.md`;
  const rawPost = await fs.readFile(file, "utf-8");

  const parsed = fm(rawPost);
  const meta = frontmatter.parse(parsed.attributes);
  const content = md.render(parsed.body);

  return {
    content,
    meta: {
      ...meta,
      writtenAt: getDate(id),
      updated: meta.updated ? getDate(meta.updated) : undefined,
    },
  };
}
