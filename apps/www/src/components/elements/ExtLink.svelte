<script lang="ts">
  export let href: string;
</script>

<a
  class="text-blue-300 transition-colors hover:text-blue-400"
  {href}
  target="_blank"
  rel="noreferrer"
>
  <slot />
</a>
