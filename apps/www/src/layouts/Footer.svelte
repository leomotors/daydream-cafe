<script lang="ts">
  import GitHub from "svelte-bootstrap-icons/lib/Github.svelte";
</script>

<footer class="self-center">
  <div class="flex flex-col items-center gap-2 sm:flex-row">
    <p class="text-sm sm:text-base">
      Source Code of this website is available on
    </p>
    <a
      href="https://github.com/leomotors/daydream-cafe"
      target="_blank"
      rel="noreferrer"
      class="flex items-center gap-1 text-slate-200 transition-colors hover:text-slate-300"
    >
      <GitHub width="20" height="20" />
      <p>GitHub</p>
    </a>
  </div>
</footer>
