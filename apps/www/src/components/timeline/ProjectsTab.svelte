<script lang="ts">
  import { ExternalLink, Icon, type LucideIconData } from "@lucide/svelte";

  import type { SideProject } from "@daydream-cafe/data";

  let { projects }: { projects: SideProject[] } = $props();

  // Brand icons were removed in lucide 1.0; this is the 0.x `github` icon.
  const githubIcon: LucideIconData = {
    name: "github",
    node: [
      [
        "path",
        {
          d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        },
      ],
      ["path", { d: "M9 18c-4.51 2-5-2-7-2" }],
    ],
  };
</script>

<div class="grid gap-6 md:grid-cols-2">
  {#each projects as project (project.name)}
    <div
      class="rounded-lg border border-gray-200 bg-white shadow-lg transition-shadow hover:shadow-xl dark:border-gray-700 dark:bg-slate-800"
    >
      <!-- Image Header -->
      <img
        src={project.image ?? "/projects/placeholder.png"}
        alt={project.name}
        class="w-full rounded-t-lg aspect-[21/9] object-cover"
      />

      <!-- Header with title and link -->

      <div class="p-6">
        <div class="mb-4 flex items-baseline justify-between text-start">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">
            {project.name}
          </h3>
          {#if project.url}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              aria-label="View {project.name}"
            >
              {#if project.url.includes("github.com")}
                <Icon icon={githubIcon} class="h-5 w-5" />
              {:else}
                <ExternalLink class="h-5 w-5" />
              {/if}
            </a>
          {/if}
        </div>

        <!-- Description -->
        <p class="mb-4 text-left text-gray-700 dark:text-gray-300">
          {project.description}
        </p>

        <!-- Technologies -->
        {#if project.technologies && project.technologies.length > 0}
          <div class="flex flex-wrap gap-2">
            {#each project.technologies as tech (tech)}
              <span
                class="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/20 dark:text-blue-300"
              >
                {tech}
              </span>
            {/each}
            {#if project.badge}
              <span
                class="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700 dark:bg-amber-500/20 dark:text-amber-300"
              >
                {project.badge}
              </span>
            {/if}
          </div>
        {/if}
      </div>
    </div>
  {/each}
</div>
