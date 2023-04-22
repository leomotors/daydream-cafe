import { getPost } from "../_lib/parser";

import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
  const props = await getPost(params.id);

  return props;
}) satisfies PageServerLoad;
