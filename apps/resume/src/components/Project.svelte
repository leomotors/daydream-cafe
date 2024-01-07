<script lang="ts">
  import HideToggle from "$components/HideToggle.svelte";

  import type { SideProject } from "@daydream-cafe/data";

  export let data: SideProject;
  $: ({ name, description, url, technologies } = data);
</script>

<li>
  <HideToggle />
  <p>
    <strong>{name}</strong> - {description}

    {#if url}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        class="font-bold text-slate-700"
      >
        {url}
      </a>
    {/if}

    {#if technologies.length > 0}
      <span>(Tech: {technologies.join(", ")})</span>
    {/if}
  </p>
</li>
