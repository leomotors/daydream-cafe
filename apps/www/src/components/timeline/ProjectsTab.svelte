<script lang="ts">
  import { ExternalLink, Github } from "@lucide/svelte";

  import type { SideProject } from "@daydream-cafe/data";

  let { projects }: { projects: SideProject[] } = $props();

  function getLinkIcon(url: string) {
    if (url.includes("github.com")) {
      return Github;
    }
    return ExternalLink;
  }
</script>

<div class="grid gap-6 md:grid-cols-2">
  {#each projects as project (project.name)}
    {@const LinkIcon = project.url ? getLinkIcon(project.url) : null}
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
        <div class="mb-4 flex items-baseline justify-between">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">
            {project.name}
          </h3>
          {#if project.url && LinkIcon}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              aria-label="View {project.name}"
            >
              <LinkIcon class="h-5 w-5" />
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
          </div>
        {/if}
      </div>
    </div>
  {/each}
</div>
