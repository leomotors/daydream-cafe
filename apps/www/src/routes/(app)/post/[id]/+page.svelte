<script lang="ts">
  import type { PageServerData } from "./$types";

  export let data: PageServerData;
</script>

<svelte:head>
  <title>{data.meta.title} | Leomotors Blog</title>
  <meta name="description" content={data.meta.description} />
</svelte:head>

<div
  style={`background-image: url(${
    data.meta.image ??
    "https://leosigh.com/wp-content/uploads/2022/08/The-Angel-Next-Door-Spoils-Me-Rotten-Mahiru-Shiina.jpg"
  })`}
  class="mx-auto aspect-[4/1] w-[calc(100vw-8rem)] rounded-2xl bg-cover bg-center"
>
  <div
    class="flex h-full w-full flex-col items-center justify-center gap-4 rounded-2xl bg-black/75 p-4 transition-colors hover:bg-black/70"
  >
    <p class="text-4xl font-bold">{data.meta.title}</p>
    <p class="text-3xl">{data.meta.description}</p>
    <p>
      📅 {data.meta.writtenAt}
      {#if data.meta.updated}
        <span class="text-gray-300">
          Updated at {data.meta.updated}
        </span>
      {/if}
    </p>

    {#if data.meta.tags}
      <p class="text-xl">
        <span class="font-bold">Tags</span>
        {#each data.meta.tags as tag}
          <span class="rounded-lg bg-gray-500 p-1">{tag}</span>
        {/each}
      </p>
    {/if}
  </div>
</div>

<article
  class="prose prose-invert m-4 mx-auto w-full max-w-4xl rounded-xl sm:prose-lg"
>
  {@html data.content}
</article>
