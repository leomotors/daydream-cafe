<script lang="ts">
  import type { Experience } from "@daydream-cafe/data";

  let { experiences }: { experiences: Experience[] } = $props();
</script>

<div class="space-y-8">
  {#each experiences as exp, i (exp.company + i)}
    <div class="relative pl-8">
      <!-- Timeline dot -->
      <div
        class="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-blue-500 bg-slate-900"
      ></div>

      <!-- Timeline line -->
      {#if i < experiences.length - 1}
        <div
          class="absolute left-[7px] top-6 h-full w-0.5 bg-blue-500/30"
        ></div>
      {/if}

      <!-- Content -->
      <div class="rounded-lg border border-gray-700 bg-slate-800 p-6 shadow-lg">
        <div class="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <h3 class="text-xl font-bold text-white">{exp.company}</h3>
          <span class="text-sm text-gray-400">{exp.duration}</span>
        </div>

        {#each exp.positions as position (position.name + position.period)}
          <div class="mb-4 border-l-2 border-gray-700 pl-4 last:mb-0">
            <div class="mb-2 flex flex-col gap-1 sm:flex-row sm:justify-between">
              <h4 class="font-semibold text-gray-100">
                {position.name}
              </h4>
              <span class="text-sm text-gray-400">{position.period}</span>
            </div>

            <ul class="mb-2 list-inside list-disc space-y-1 text-left text-sm text-gray-300">
              {#each position.jobs as job (job)}
                <li>{job}</li>
              {/each}
            </ul>

            <div class="flex flex-wrap gap-2">
              {#each position.technologies as tech (tech)}
                <span
                  class="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300"
                >
                  {tech}
                </span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>
