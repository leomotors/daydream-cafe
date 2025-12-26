<script lang="ts">
  import BoxArrowUpRight from "svelte-bootstrap-icons/lib/BoxArrowUpRight.svelte";

  interface Props {
    name: string;
    to: string;
  }

  let { name, to }: Props = $props();
</script>

<a
  href={to}
  target="_blank"
  rel="noreferrer"
  class="flex gap-1 items-center hover:underline hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
>
  <span>{name}</span>

  <BoxArrowUpRight width="12" height="12" />
</a>
