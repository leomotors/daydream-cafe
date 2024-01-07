import { introData as baseIntroData } from "@daydream-cafe/data";

import { dev } from "$app/environment";
import { env } from "$env/dynamic/public";

export const introData = {
  ...baseIntroData,
  phone: dev ? env.PUBLIC_PHONE : "",
  email: dev ? env.PUBLIC_EMAIL : "",
};
