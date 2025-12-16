<script lang="ts">
  import { Links } from "@daydream-cafe/constants";

  import CgWebring from "../components/CgWebring.svelte";
  import ExternalLink from "../components/ExternalLink.svelte";
</script>

<nav class="mx-auto mt-4 w-fit max-w-3xl flex gap-2">
  <div
    class="flex justify-center items-center gap-4 rounded-full border border-gray-200/20 bg-white/20 px-6 py-3 shadow-lg backdrop-blur-xs text-white"
  >
    <ExternalLink name="GitHub" to={Links.github} />

    <ExternalLink name="Resume" to={Links.resume} />

    <ExternalLink name="LinkedIn" to={Links.linkedin} />

    <ExternalLink name="Blog" to={Links.medium} />
  </div>

  <div
    class="flex aspect-square items-center justify-center rounded-full border border-gray-200/20 bg-white/20 shadow-lg backdrop-blur-xs text-white px-4"
  >
    <a
      href="https://creatorsgarten.org/ring"
      target="_blank"
      rel="noreferrer"
      class="flex items-center justify-center hover:text-slate-300 transition-colors"
    >
      <CgWebring size={20} />
    </a>
  </div>
</nav>
