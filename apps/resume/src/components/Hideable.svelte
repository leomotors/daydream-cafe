<script lang="ts">
  import type { Snippet } from "svelte";
  import { stopPropagation } from "svelte/legacy";

  interface Props {
    hide?: boolean;
    children: Snippet;
  }

  let { hide = $bindable(false), children }: Props = $props();

  const toggleHide = () => (hide = !hide);
</script>

<div
  class="group relative"
  class:web-only={hide}
  class:text-gray-300={hide}
  role="button"
>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <span
    onclick={stopPropagation(toggleHide)}
    class="cursor-pointer select-none"
    class:cursor-copy={hide}
  >
    {@render children()}
  </span>
</div>
