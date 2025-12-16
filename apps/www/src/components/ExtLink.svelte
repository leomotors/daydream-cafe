<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    href: string;
    children: Snippet;
  }

  let { href, children }: Props = $props();
</script>

<a
  class="text-blue-500 hover:text-blue-600 dark:text-blue-300 transition-colors dark:hover:text-blue-400"
  {href}
  target="_blank"
  rel="noreferrer"
>
  {@render children()}
</a>
