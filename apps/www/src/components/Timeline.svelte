<script lang="ts">
  import {
    Award,
    BookOpen,
    Briefcase,
    FolderGit2,
    GitPullRequest,
    GraduationCap,
  } from "@lucide/svelte";

  import type {
    Activity,
    Certificate,
    Education,
    Experience,
    OSSContrib,
    Publication,
    SideProject,
    Volunteer,
  } from "@daydream-cafe/data";

  import ActivitiesTab from "./timeline/ActivitiesTab.svelte";
  import ContributionTab from "./timeline/ContributionTab.svelte";
  import EducationTimeline from "./timeline/EducationTimeline.svelte";
  import ExperienceTimeline from "./timeline/ExperienceTimeline.svelte";
  import ProjectsTab from "./timeline/ProjectsTab.svelte";
  import PublicationsTab from "./timeline/PublicationsTab.svelte";

  type Tab =
    | "experience"
    | "education"
    | "projects"
    | "contribution"
    | "activities"
    | "publications";

  let {
    experiences,
    educations,
    projects,
    volunteers,
    ossContribs,
    activities,
    publications,
    certificates,
    qualifications,
  }: {
    experiences: Experience[];
    educations: Education[];
    projects: SideProject[];
    volunteers: Volunteer[];
    ossContribs: OSSContrib[];
    activities: Activity[];
    publications: Publication[];
    certificates: Certificate[];
    qualifications: string[];
  } = $props();

  let activeTab = $state<Tab>("experience");

  function setTab(tab: Tab) {
    activeTab = tab;
  }
</script>

<section class="w-full bg-gray-100 py-12 dark:bg-slate-800/50">
  <div class="mx-auto max-w-4xl px-4">
    <!-- Tabs -->
    <div class="mb-8 flex flex-wrap justify-center gap-2">
      <button
        class="flex items-center gap-2 rounded-full px-6 py-2 font-medium transition-all {activeTab ===
        'experience'
          ? 'bg-blue-600 text-white shadow-lg'
          : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700'}"
        onclick={() => setTab("experience")}
      >
        <Briefcase class="h-4 w-4" />
        Job Experience
      </button>
      <button
        class="flex items-center gap-2 rounded-full px-6 py-2 font-medium transition-all {activeTab ===
        'education'
          ? 'bg-blue-600 text-white shadow-lg'
          : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700'}"
        onclick={() => setTab("education")}
      >
        <GraduationCap class="h-4 w-4" />
        Education
      </button>
      <button
        class="flex items-center gap-2 rounded-full px-6 py-2 font-medium transition-all {activeTab ===
        'projects'
          ? 'bg-blue-600 text-white shadow-lg'
          : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700'}"
        onclick={() => setTab("projects")}
      >
        <FolderGit2 class="h-4 w-4" />
        Projects
      </button>
      <button
        class="flex items-center gap-2 rounded-full px-6 py-2 font-medium transition-all {activeTab ===
        'contribution'
          ? 'bg-blue-600 text-white shadow-lg'
          : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700'}"
        onclick={() => setTab("contribution")}
      >
        <GitPullRequest class="h-4 w-4" />
        Contribution
      </button>
      <button
        class="flex items-center gap-2 rounded-full px-6 py-2 font-medium transition-all {activeTab ===
        'activities'
          ? 'bg-blue-600 text-white shadow-lg'
          : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700'}"
        onclick={() => setTab("activities")}
      >
        <Award class="h-4 w-4" />
        Activities
      </button>
      <button
        class="flex items-center gap-2 rounded-full px-6 py-2 font-medium transition-all {activeTab ===
        'publications'
          ? 'bg-blue-600 text-white shadow-lg'
          : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700'}"
        onclick={() => setTab("publications")}
      >
        <BookOpen class="h-4 w-4" />
        Publications
      </button>
    </div>

    <!-- Timeline Content -->
    <div class="relative">
      {#if activeTab === "experience"}
        <ExperienceTimeline {experiences} />
      {:else if activeTab === "education"}
        <EducationTimeline {educations} />
      {:else if activeTab === "projects"}
        <ProjectsTab {projects} />
      {:else if activeTab === "contribution"}
        <ContributionTab {volunteers} {ossContribs} />
      {:else if activeTab === "activities"}
        <ActivitiesTab {activities} {certificates} {qualifications} />
      {:else if activeTab === "publications"}
        <PublicationsTab {publications} />
      {/if}
    </div>
  </div>
</section>
