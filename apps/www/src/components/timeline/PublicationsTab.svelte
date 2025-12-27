<script lang="ts">
  import { BookOpen } from "@lucide/svelte";

  import { FULL_NAME } from "@daydream-cafe/constants";
  import type { Publication } from "@daydream-cafe/data";

  let {
    publications,
  }: {
    publications: Publication[];
  } = $props();
</script>

<div class="space-y-8">
  <!-- Publications Section -->
  {#if publications && publications.length > 0}
    <div>
      <h3
        class="mb-4 flex items-center gap-2 text-left text-2xl font-bold text-gray-900 dark:text-white"
      >
        <BookOpen
          class="h-8 w-8 p-1 rounded-full bg-white border border-gray-500/50 text-gray-900 overflow-visible"
        />
        Publications
      </h3>
      <div class="space-y-4">
        {#each publications as publication (publication.doi)}
          <div
            class="flex flex-col items-start rounded-lg border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-700 dark:bg-slate-800"
          >
            <h4
              class="mb-2 text-left font-semibold text-gray-900 dark:text-white"
            >
              {publication.name}
            </h4>
            <p class="text-left text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>{publication.type}</span>
              <span class="mx-2">•</span>
              <span>{publication.publishedDate}</span>
            </p>
            <p class="text-left text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span class="font-medium">{publication.publishedTo}</span>
            </p>
            <p class="text-left text-sm text-gray-700 dark:text-gray-300 mb-3">
              <span class="font-medium">Contributors:</span>
              {#each publication.contributors as contributor, index (index)}
                <span>
                  {#if index !== 0}
                    ,
                  {/if}
                  {#if contributor === FULL_NAME}
                    <strong>{contributor}</strong>
                  {:else}
                    {contributor}
                  {/if}
                </span>
              {/each}
            </p>
            <p class="text-sm">
              DOI:
              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {publication.doi}
              </a>
            </p>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
