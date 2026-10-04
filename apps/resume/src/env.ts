import { defineEnvVars } from "@sveltejs/kit/env";

const optional = (value: string | undefined) => value;

export const variables = defineEnvVars({
  PUBLIC_PHONE: { public: true, schema: optional },
  PUBLIC_EMAIL: { public: true, schema: optional },
});
