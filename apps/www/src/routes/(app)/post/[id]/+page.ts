import { posts } from "@daydream-cafe/posts";
import { error } from "@sveltejs/kit";

import type { PageLoad } from "./$types";

export const load = (({ params }) => {
  if (params.id in posts) {
    return {
      Content: posts[params.id as keyof typeof posts],
    };
  }

  throw error(404, "Not Found");
}) satisfies PageLoad;
