<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    href: string;
    children: Snippet;
  }

  let { href, children }: Props = $props();
</script>

<a
  class="text-blue-300 transition-colors hover:text-blue-400"
  {href}
  target="_blank"
  rel="noreferrer"
>
  {@render children()}
</a>
