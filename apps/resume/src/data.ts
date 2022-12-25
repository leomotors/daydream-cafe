import { introData as baseIntroData } from "@daydream-cafe/data/resume";

import { dev } from "$app/environment";
import { PUBLIC_EMAIL, PUBLIC_PHONE } from "$env/static/public";

export const introData = {
  ...baseIntroData,
  phone: dev ? PUBLIC_PHONE : "",
  email: dev ? PUBLIC_EMAIL : "",
};
