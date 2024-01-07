<script lang="ts">
  import HideToggle from "$components/HideToggle.svelte";
  import type { Contribution } from "@daydream-cafe/data";

  export let title: string;
  export let data: Contribution[];
  export let h2clsx: string;
</script>

<HideToggle />
<h2 class={h2clsx}>{title}</h2>
<hr />

<ul class="list-disc pl-8 text-left">
  {#each data as d}
    <li>
      <HideToggle />
      <p>
        <strong>{d.name}</strong> - {d.description}
      </p>

      {#if d.contributions.length > 0}
        <ul class="list-disc pl-8 print:pl-6">
          {#each d.contributions as contribution}
            <li>{contribution}</li>
          {/each}
        </ul>
      {/if}
    </li>
  {/each}
</ul>

<style lang="postcss">
  hr {
    @apply mb-2 mt-0;
    border-color: darkgrey;
  }
</style>
