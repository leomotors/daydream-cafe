<script lang="ts">
  import { Links } from "@daydream-cafe/constants";

  import CgWebring from "../components/CgWebring.svelte";
  import ExternalLink from "../components/ExternalLink.svelte";
  import ThemeToggle from "../components/ThemeToggle.svelte";

  const tileStyle =
    "border border-gray-300/50 bg-white/20 shadow-lg backdrop-blur-xs text-gray-800 dark:border-gray-700/50 dark:bg-slate-800/20 dark:text-white";
</script>

<nav class="mx-auto mt-4 w-fit max-w-3xl flex gap-2">
  <div
    class="flex justify-center items-center gap-4 rounded-full px-6 py-3 {tileStyle}"
  >
    <ExternalLink name="GitHub" to={Links.github} />

    <ExternalLink name="Resume" to={Links.resume} />

    <ExternalLink name="LinkedIn" to={Links.linkedin} />

    <ExternalLink name="Blog" to={Links.medium} />
  </div>

  <ThemeToggle class="aspect-square rounded-full px-4 {tileStyle}" />

  <div
    class="flex aspect-square items-center justify-center rounded-full px-4 {tileStyle}"
  >
    <a
      href="https://creatorsgarten.org/ring"
      target="_blank"
      rel="noreferrer"
      class="flex items-center justify-center hover:text-blue-600 dark:hover:text-slate-300 transition-colors"
    >
      <CgWebring size={20} />
    </a>
  </div>
</nav>
