<script lang="ts">
  import type { Contribution } from "@daydream-cafe/data";
  import Hideable from "./Hideable.svelte";

  export let data: Contribution[];
</script>

<ul class="list-disc pl-8 text-left">
  {#each data as d}
    <Hideable>
      <li>
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
    </Hideable>
  {/each}
</ul>
