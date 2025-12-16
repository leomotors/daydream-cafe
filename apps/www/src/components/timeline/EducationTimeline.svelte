<script lang="ts">
  import type { Education } from "@daydream-cafe/data";

  let { educations: _educations }: { educations: Education[] } = $props();

  const educations = $derived(_educations.toReversed());
</script>

<div class="space-y-8">
  {#each educations as edu, i (edu.name + i)}
    <div class="relative pl-8">
      <!-- Timeline dot -->
      <div
        class="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-blue-500 bg-slate-900"
      ></div>

      <!-- Timeline line -->
      {#if i < educations.length - 1}
        <div
          class="absolute left-[7px] top-6 h-full w-0.5 bg-blue-500/30"
        ></div>
      {/if}

      <!-- Content -->
      <div class="rounded-lg border border-gray-700 bg-slate-800 p-6 shadow-lg">
        <div
          class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between"
        >
          <div class="text-left">
            <h3 class="text-xl font-bold text-white">{edu.name}</h3>
            <p class="text-gray-300">{edu.program}</p>
          </div>
          <div class="text-left sm:text-right">
            <span class="text-sm text-gray-400">{edu.year}</span>
            <p class="text-sm font-semibold text-blue-400">GPAX: {edu.gpax}</p>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
