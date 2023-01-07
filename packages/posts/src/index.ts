import fs from "node:fs/promises";

import { writeStaticPaths } from "./paths";

const files = await fs.readdir("posts");

await writeStaticPaths(files);
