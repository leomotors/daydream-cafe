<script lang="ts">
  import type { PageServerData } from "./$types";

  export let data: PageServerData;
</script>

<aside>
  <p>{data.meta.title}</p>
  <p>{data.meta.description}</p>
</aside>

<article class="prose prose-lg m-4 mx-auto rounded-xl bg-white p-8">
  {@html data.content}
</article>
