<script lang="ts">
  import type { OSSContrib, Volunteer } from "@daydream-cafe/data";

  let {
    volunteers,
    ossContribs,
  }: {
    volunteers: Volunteer[];
    ossContribs: OSSContrib[];
  } = $props();
</script>

<div class="grid gap-6 lg:grid-cols-2">
  <!-- Volunteer Experience Column -->
  <div class="space-y-4">
    <h3 class="mb-4 text-left text-2xl font-bold text-gray-900 dark:text-white">
      Volunteer Experience
    </h3>
    {#each volunteers as contrib (contrib.name)}
      <div
        class="rounded-lg border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-slate-800"
      >
        <!-- Header -->
        <h4
          class="mb-3 text-left text-lg font-bold text-gray-900 dark:text-white"
        >
          {contrib.name}
        </h4>

        <!-- Description -->
        <p class="mb-4 text-left text-sm text-gray-700 dark:text-gray-300">
          {contrib.description}
        </p>

        <!-- Contributions list -->
        {#if contrib.contributions && contrib.contributions.length > 0}
          <div
            class="rounded-md border-l-4 border-blue-500 bg-gray-50 p-4 dark:bg-slate-900/50"
          >
            <h5
              class="mb-2 text-left text-xs font-semibold text-gray-800 dark:text-gray-200"
            >
              Contributions:
            </h5>
            <ul
              class="list-inside list-disc space-y-1 text-left text-xs text-gray-700 dark:text-gray-300"
            >
              {#each contrib.contributions as contribution (contribution)}
                <li>{contribution}</li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <!-- Open Source Contributions Column -->
  <div class="space-y-4">
    <h3 class="mb-4 text-left text-2xl font-bold text-gray-900 dark:text-white">
      Open Source Contributions
    </h3>
    {#each ossContribs as contrib (contrib.name)}
      <div
        class="rounded-lg border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-slate-800"
      >
        <!-- Header -->
        <h4
          class="mb-3 text-left text-lg font-bold text-gray-900 dark:text-white"
        >
          {contrib.name}
        </h4>

        <!-- Description -->
        <p class="mb-4 text-left text-sm text-gray-700 dark:text-gray-300">
          {contrib.description}
        </p>

        <!-- Contributions list -->
        {#if contrib.contributions && contrib.contributions.length > 0}
          <div
            class="rounded-md border-l-4 border-blue-500 bg-gray-50 p-4 dark:bg-slate-900/50"
          >
            <h5
              class="mb-2 text-left text-xs font-semibold text-gray-800 dark:text-gray-200"
            >
              Contributions:
            </h5>
            <ul
              class="list-inside list-disc space-y-1 text-left text-xs text-gray-700 dark:text-gray-300"
            >
              {#each contrib.contributions as contribution (contribution)}
                <li>{contribution}</li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
