<script lang="ts">
  import type { SideProject } from "@daydream-cafe/data";

  interface Props {
    data: SideProject;
  }

  let { data }: Props = $props();
  let { name, description, url, technologies } = $derived(data);
</script>

<li>
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
