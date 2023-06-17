<script lang="ts">
  import PostDate from "../_lib/PostDate.svelte";
  import Tags from "../_lib/Tags.svelte";

  import type { PageServerData } from "./$types";

  export let data: PageServerData;
</script>

<svelte:head>
  <title>{data.meta.title} | Leomotors Blog</title>
  <meta name="description" content={data.meta.description} />
</svelte:head>

<div
  style={data.meta.image && `background-image: url(${data.meta.image})`}
  class="imageCard mx-auto aspect-[4/1] w-[calc(100vw-8rem)]"
>
  <div>
    <p class="text-4xl font-bold">{data.meta.title}</p>
    <p class="text-3xl">{data.meta.description}</p>
    <PostDate writtenAt={data.meta.writtenAt} updated={data.meta.updated} />

    <Tags clsx="text-xl" tags={data.meta.tags} />
  </div>
</div>

<article
  class="prose prose-invert m-4 mx-auto w-full max-w-4xl rounded-xl sm:prose-lg"
>
  <!-- Trusted Content -->
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html data.content}
</article>
