<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  // $: ({ Content } = data);
</script>

<article class="prose prose-lg m-4 mx-auto rounded-xl bg-white p-8">
  {@html data.content}
</article>
