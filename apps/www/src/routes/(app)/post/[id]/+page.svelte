<script lang="ts">
  import type { PageServerData } from "./$types";

  export let data: PageServerData;
</script>

<svelte:head>
  <title>{data.meta.title} | Leomotors Blog</title>
  <meta name="description" content={data.meta.description} />
</svelte:head>

<article
  class="prose prose-invert m-4 mx-auto w-full max-w-4xl rounded-xl p-8 sm:prose-lg"
>
  {@html data.content}
</article>
