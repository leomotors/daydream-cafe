<script lang="ts">
  import { Moon, Sun } from "@lucide/svelte";
  import { onMount } from "svelte";

  let { class: className = "" }: { class?: string } = $props();

  let theme = $state<"light" | "dark">("dark");

  onMount(() => {
    // Get theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "light" || savedTheme === "dark") {
      theme = savedTheme;
    } else if (prefersDark) {
      theme = "dark";
    } else {
      theme = "light";
    }

    // Apply theme
    document.documentElement.classList.toggle("dark", theme === "dark");
  });

  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }
</script>

<button
  onclick={toggleTheme}
  class="flex items-center justify-center transition-colors hover:text-slate-500 dark:hover:text-slate-300 cursor-pointer {className}"
  aria-label="Toggle theme"
>
  {#if theme === "dark"}
    <Sun size={20} />
  {:else}
    <Moon size={20} />
  {/if}
</button>
