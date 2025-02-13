// @ts-check

import { createESLintConfig, defaultImportOrder } from "@leomotors/config";

export default createESLintConfig({
  importOrder: defaultImportOrder("daydream-cafe"),
});
