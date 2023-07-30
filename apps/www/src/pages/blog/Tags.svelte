<script lang="ts">
  export let tags: string[] | undefined = undefined;
  export let clsx: string | undefined = undefined;
</script>

{#if tags}
  <p class={clsx}>
    <span class="font-bold">Tags</span>
    {#each tags as tag}
      <span class="rounded-lg bg-gray-500 p-1">{tag}</span>
    {/each}
  </p>
{/if}
