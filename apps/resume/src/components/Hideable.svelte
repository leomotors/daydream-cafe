<script lang="ts">
  export let hide = false;

  const toggleHide = () => (hide = !hide);
</script>

<div
  class="group relative"
  class:web-only={hide}
  class:text-gray-300={hide}
  role="button"
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <span
    on:click|stopPropagation={toggleHide}
    class="cursor-pointer select-none"
    class:cursor-copy={hide}
  >
    <slot />
  </span>
</div>
