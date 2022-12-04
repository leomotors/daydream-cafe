<script lang="ts">
  import "$/app.scss";

  import { Footer, NavBar } from "$components/layouts";
</script>

<svelte:head>
  <title>Leomotors - Nutthapat Pongtanyavichai</title>
  <meta
    name="description"
    content="Brief Introduction about me and as portal to my resume, portfolio, blog and other sites"
  />
</svelte:head>

<div
  class="flex min-h-screen flex-col justify-between gap-16 bg-slate-900 px-1 py-8 text-white"
>
  <NavBar />
  <slot />
  <Footer />
</div>
