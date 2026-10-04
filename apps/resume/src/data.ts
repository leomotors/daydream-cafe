import { dev } from "$app/env";
import { PUBLIC_EMAIL, PUBLIC_PHONE } from "$app/env/public";

import { introData as baseIntroData } from "@daydream-cafe/data";

export const introData = {
  ...baseIntroData,
  phone: dev ? PUBLIC_PHONE : "",
  email: dev ? PUBLIC_EMAIL : "",
};
