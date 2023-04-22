<script lang="ts">
  import type { PageServerData } from "./$types";
  import PostDate from "./_lib/PostDate.svelte";
  import Tags from "./_lib/Tags.svelte";

  export let data: PageServerData;
</script>

<main class="flex flex-col justify-start gap-8 text-center">
  <h1 class="text-4xl font-bold">Blog Posts</h1>

  <div
    class="mx-auto grid grid-cols-1 gap-8 p-4 md:grid-cols-2 xl:grid-cols-3 2xl:w-4/5"
  >
    {#each data.posts as post}
      <a href={post.path}>
        <div
          class="imageCard h-full"
          style={post.image && `background-image: url(${post.image})`}
        >
          <div>
            <p class="text-xl font-bold">{post.title}</p>
            <p>{post.description}</p>
            <PostDate writtenAt={post.writtenAt} updated={post.updated} />
            <Tags tags={post.tags} />
          </div>
        </div>
      </a>
    {/each}
  </div>
</main>
