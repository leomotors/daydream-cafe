# Instructions

## Projects

This project contains source code for multiple website.
All of them use TailwindCSS and sometimes SCSS for styling.

It also contains lots of legacy code. Avoid touching them unless instructed.
For new components, always use the UI library located in `packages/ui`.

### resume (apps/resume)

Written with SvelteKit

### www (apps/www)

Written with Astro + Svelte

Components preferred to be written in Astro if client side interactivity is not needed.

### UI Library (packages/ui)

Using shadcn-svelte, llms.txt: https://shadcn-svelte.com/llms.txt

Prefer components from shadcn-svelte whenever possible.

Whenever you add a new components which can be done using `pnpm dlx shadcn-svelte add ...` inside `packages/ui` folder, it will be appear under `src/components/ui` folder, please follow the following steps:

- Move the components to appropriate location which are `src/atoms`, `src/molecules`, `src/organisms`, `src/templates` based on the component complexity according to atomic design principles. Make sure you have checked exports field of package.json and update it if neccessary.
- IMPORTANT: Run `bun scripts/fix-ui-imports.ts` to automatically fix all incorrect import paths from `$lib/utils` to `@repo/ui/utils`.

## Available MCP Tools : Svelte

You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.
