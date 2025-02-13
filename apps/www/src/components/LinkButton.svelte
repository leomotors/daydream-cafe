<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    name?: string;
    to: `http${"s" | ""}://${string}`;
    size?: "sm" | "lg";
    children: Snippet;
    [key: string]: unknown;
  }

  let { name = "", to, size = "lg", children, ...rest }: Props = $props();
</script>

<a
  class={size == "lg" ? "p-3" : "p-2"}
  href={to}
  target="_blank"
  rel="noreferrer"
  {...rest}
>
  {@render children()}

  {#if name}
    <p class={size == "lg" ? "text-xl font-bold sm:text-2xl" : "text-lg"}>
      {name}
    </p>
  {/if}
</a>

<style lang="scss">
  @reference "../styles.css";

  a {
    @apply border-2 border-slate-400 bg-slate-800 transition-all hover:bg-slate-700;
    @apply flex cursor-pointer select-none flex-row items-center justify-center gap-2 rounded-lg;
  }
</style>
