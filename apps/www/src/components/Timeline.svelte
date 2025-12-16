<script lang="ts">
  import type { Education, Experience } from "@daydream-cafe/data";

  import EducationTimeline from "./timeline/EducationTimeline.svelte";
  import ExperienceTimeline from "./timeline/ExperienceTimeline.svelte";

  type Tab = "experience" | "education";

  let {
    experiences,
    educations,
  }: {
    experiences: Experience[];
    educations: Education[];
  } = $props();

  let activeTab = $state<Tab>("experience");

  function setTab(tab: Tab) {
    activeTab = tab;
  }
</script>

<section class="w-full bg-gray-100 py-12 dark:bg-slate-800/50">
  <div class="mx-auto max-w-4xl px-4">
    <!-- Tabs -->
    <div class="mb-8 flex justify-center gap-2">
      <button
        class="rounded-full px-6 py-2 font-medium transition-all {activeTab ===
        'experience'
          ? 'bg-blue-600 text-white shadow-lg'
          : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700'}"
        onclick={() => setTab("experience")}
      >
        Job Experience
      </button>
      <button
        class="rounded-full px-6 py-2 font-medium transition-all {activeTab ===
        'education'
          ? 'bg-blue-600 text-white shadow-lg'
          : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700'}"
        onclick={() => setTab("education")}
      >
        Education
      </button>
    </div>

    <!-- Timeline Content -->
    <div class="relative">
      {#if activeTab === "experience"}
        <ExperienceTimeline {experiences} />
      {:else}
        <EducationTimeline {educations} />
      {/if}
    </div>
  </div>
</section>
