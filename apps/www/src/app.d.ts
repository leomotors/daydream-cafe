// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

declare namespace App {
  // interface Error {}
  // interface Locals {}
  // interface PageData {}
  // interface Platform {}
}

// Stop VSCode's TypeScript extension from complaining
// VSCode's Svelte extension still infers types correctly
declare module "*.svelte" {
  const Component: import("svelte").SvelteComponent;
  export default Component;
}
