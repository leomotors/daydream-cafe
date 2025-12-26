<script lang="ts">
  import { Award, ExternalLink } from "@lucide/svelte";

  import type { Activity, Certificate } from "@daydream-cafe/data";

  let {
    activities,
    certificates,
    qualifications,
  }: {
    activities: Activity[];
    certificates: Certificate[];
    qualifications: string[];
  } = $props();
</script>

<div class="space-y-8">
  <!-- Activities and Awards Section -->
  {#if activities && activities.length > 0}
    <div>
      <h3
        class="mb-4 flex items-center gap-2 text-left text-2xl font-bold text-gray-900 dark:text-white"
      >
        <Award
          class="h-8 w-8 p-1 rounded-full bg-white border border-gray-500/50"
        />
        Activities & Awards
      </h3>
      <div class="space-y-4">
        {#each activities as activity (activity.name)}
          <div
            class="rounded-lg border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-700 dark:bg-slate-800"
          >
            <h4
              class="mb-2 text-left font-semibold text-gray-900 dark:text-white"
            >
              {activity.name}
            </h4>
            <p class="text-left text-sm text-gray-700 dark:text-gray-300">
              {activity.description}
            </p>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Certificates Section -->
  {#if certificates && certificates.length > 0}
    <div>
      <h3
        class="mb-4 text-left text-2xl font-bold text-gray-900 dark:text-white"
      >
        Certificates
      </h3>
      <div class="grid gap-6 md:grid-cols-2">
        {#each certificates as cert (cert.name)}
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            class="group rounded-lg border border-gray-200 bg-white p-5 shadow-lg transition-all hover:shadow-xl dark:border-gray-700 dark:bg-slate-800"
          >
            <div class="mb-3 flex items-start justify-between">
              <img
                src={cert.image}
                alt={cert.name}
                class="h-20 w-20 rounded-lg object-contain"
              />
              <ExternalLink
                class="h-5 w-5 text-blue-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-blue-400"
              />
            </div>
            <h4
              class="text-left font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400"
            >
              {cert.name}
            </h4>
          </a>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Qualifications Section -->
  {#if qualifications && qualifications.length > 0}
    <div>
      <h3
        class="mb-4 text-left text-2xl font-bold text-gray-900 dark:text-white"
      >
        Qualifications
      </h3>
      <div class="space-y-3">
        {#each qualifications as qualification (qualification)}
          <div
            class="rounded-lg border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-slate-800"
          >
            <p class="text-left font-medium text-gray-900 dark:text-white">
              {qualification}
            </p>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
