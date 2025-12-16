<script lang="ts">
  import { Links } from "@daydream-cafe/constants";

  import CgWebring from "../components/CgWebring.svelte";
  import ExternalLink from "../components/ExternalLink.svelte";
</script>

<nav class="mx-auto mt-4 w-fit max-w-3xl rounded-full border border-gray-200/50 bg-white/20 px-6 py-3 shadow-lg backdrop-blur-xs text-white">
  <div class="flex justify-center items-center gap-4">
    <ExternalLink name="GitHub" to={Links.github} />

    <ExternalLink name="Resume" to={Links.resume} />

    <ExternalLink name="LinkedIn" to={Links.linkedin} />

    <ExternalLink name="Blog" to={Links.medium} />

    <a
      href="https://creatorsgarten.org/ring"
      target="_blank"
      rel="noreferrer"
      class="hover:text-slate-300 transition-colors"
    >
      <CgWebring size={20} />
    </a>
  </div>
</nav>
