<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <title>Leomotors Resume</title>
  <meta name="description" content="Resume of Nutthapat Pongtanyavichai" />
</svelte:head>

{@render children()}
