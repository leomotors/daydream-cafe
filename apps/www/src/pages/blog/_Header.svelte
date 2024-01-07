<script lang="ts">
  import type { CollectionEntry } from "astro:content";
  import clsx from "clsx/lite";

  import PostDate from "./_PostDate.svelte";
  import Tags from "./_Tags.svelte";
  import styles from "./_blog.module.scss";
  import { formatDate, toDate } from "./_utils";

  export let post: CollectionEntry<"blog">;

  export let smol = false;
</script>

<header
  style={post.data.image && `background-image: url(${post.data.image})`}
  class={clsx(
    styles.imageCard,
    smol || "mx-4 aspect-[4/1] sm:mx-auto sm:w-[calc(100vw-8rem)]",
    smol && "h-96",
  )}
>
  <div>
    <p
      class={clsx(
        "font-bold",
        smol ? "text-xl sm:text-2xl" : "text-2xl sm:text-4xl",
      )}
    >
      {post.data.title}
    </p>
    <p class={smol ? "text-lg sm:text-xl" : "text-xl sm:text-3xl"}>
      {post.data.description}
    </p>
    <PostDate
      writtenAt={formatDate(toDate(+post.id.split("-")[0]))}
      updated={post.data.updated
        ? formatDate(toDate(post.data.updated))
        : undefined}
    />

    <Tags clsx={smol ? "" : "sm:text-xl"} tags={post.data.tags} />
  </div>
</header>
