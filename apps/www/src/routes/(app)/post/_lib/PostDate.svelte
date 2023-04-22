<script lang="ts">
  export let writtenAt: string;
  export let updated: string = "";
</script>

<p>
  📅 {writtenAt}
  {#if updated}
    <span class="text-gray-300">
      Updated at {updated}
    </span>
  {/if}
</p>
