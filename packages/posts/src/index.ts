import fs from "node:fs/promises";

import { writeStaticPaths } from "./paths";
import { renderPosts } from "./render";

const files = await fs.readdir("posts");

await renderPosts(files);
await writeStaticPaths(files);
