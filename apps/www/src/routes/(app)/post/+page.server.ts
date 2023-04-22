import staticPaths from "@daydream-cafe/posts/staticPaths";

import type { PageServerLoad } from "./$types";
import { getPost } from "./_lib/parser";

const pathToId = (path: string) => path.split("/").at(-1) as string;

export const load = (async () => {
  const posts = (
    await Promise.all(
      staticPaths
        .map((path) => [path, pathToId(path)])
        .map(async ([path, id]) => ({ ...(await getPost(id)).meta, path }))
    )
  ).reverse();

  return { posts };
}) satisfies PageServerLoad;
