<script lang="ts">
  import ExternalLink from "../components/ExternalLink.svelte";

  import { Links } from "@daydream-cafe/constants";

  import CgWebring from "../components/CgWebring.svelte";
</script>

<nav class="h-16 bg-slate-700 shadow flex items-center px-4 justify-center">
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
