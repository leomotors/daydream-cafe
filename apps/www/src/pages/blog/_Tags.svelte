<script lang="ts">
  interface Props {
    tags?: string[] | undefined;
    clsx?: string | undefined;
  }

  let { tags = undefined, clsx = undefined }: Props = $props();
</script>

{#if tags}
  <p class={clsx}>
    <span class="font-bold">Tags</span>
    {#each tags as tag, index (index)}
      <span class="mx-1 rounded-lg bg-gray-500 p-1">{tag}</span>
    {/each}
  </p>
{/if}
