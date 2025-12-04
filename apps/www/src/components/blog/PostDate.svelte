<script lang="ts">
  interface Props {
    writtenAt: string;
    updated?: string;
  }

  let { writtenAt, updated = "" }: Props = $props();
</script>

<p>
  📅 {writtenAt}
  {#if updated}
    <span class="text-gray-300">
      Updated at {updated}
    </span>
  {/if}
</p>
