<script lang="ts">
  import type { CollectionEntry } from "astro:content";

  import PostDate from "./PostDate.svelte";
  import Tags from "./Tags.svelte";
  import styles from "./blog.module.scss";
  import { formatDate, toDate } from "./utils";

  export let post: CollectionEntry<"blog">;
</script>

<header
  style={post.data.image && `background-image: url(${post.data.image})`}
  class="{styles.imageCard} mx-4 aspect-[4/1] sm:mx-auto sm:w-[calc(100vw-8rem)]"
>
  <div>
    <p class="text-2xl font-bold sm:text-4xl">{post.data.title}</p>
    <p class="text-xl sm:text-3xl">{post.data.description}</p>
    <PostDate
      writtenAt={formatDate(toDate(+post.id.split("-")[0]))}
      updated={post.data.updated
        ? formatDate(toDate(post.data.updated))
        : undefined}
    />

    <Tags clsx="sm:text-xl" tags={post.data.tags} />
  </div>
</header>
