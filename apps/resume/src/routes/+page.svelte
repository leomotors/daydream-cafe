<script lang="ts">
  import "../app.css";

  // Intro Data
  import { introData } from "../data";

  import {
    // Intro Data
    sourceLink,
    fullVersionLink,

    // Resume Content
    educations,
    experiences,
    volunteers,
    ossContribs,
    baseSkills,
    sideProjects,
    activities,
    certificates,
  } from "@daydream-cafe/data";

  import Certificate from "$components/Certificate.svelte";
  import Contribution from "$components/Contribution.svelte";
  import HideToggle from "$components/HideToggle.svelte";
  import Intro from "$components/Intro.svelte";
  import Project from "$components/Project.svelte";
  import Work from "$components/Work.svelte";

  let editMode = false;
  function toggleMode() {
    editMode = !editMode;
  }

  const h2clsx = "text-left text-2xl uppercase print:text-4xl font-semibold";
</script>

<header
  class="web-only w-screen bg-green-500 p-4 text-center text-white sm:p-6"
>
  <h1 class="text-4xl">Resumette</h1>
  <h3>
    <button on:click={toggleMode} class="text-lg underline">
      {editMode ? "[View]" : "[Edit]"}
    </button>
    <button on:click={() => window.print()} class="text-lg underline">
      [Print]
    </button>
  </h3>
  <p>
    Printer-friendly standard résumé template by
    <a href="https://github.com/narze/resume">narze</a>, any HTML tags with
    <code>web-only</code> CSS class will be hidden on print.
  </p>
  <p>
    You can toggle
    <button on:click={toggleMode} class="underline"> [Edit Mode] </button>
    to hide some sections before printing.
  </p>
  (<a href={sourceLink} target="_blank" rel="noreferrer">Source</a>)

  <p>
    See all my other websites at
    <a href={"https://" + introData.website} target="_blank" rel="noreferrer">
      {introData.website}
    </a>
  </p>
</header>

<main
  class="m-0 max-w-screen-xl p-4 text-center md:m-8 xl:mx-auto {editMode
    ? 'edit-mode'
    : 'display-mode'}"
>
  <Intro {...introData} />

  <!-- Section List: packages/data/src/index.ts -->

  <!-- Section 1 -->
  <section>
    <HideToggle />
    <h2 class={h2clsx}>Education</h2>
    <hr />

    <ul>
      {#each educations as edu}
        <li>
          <HideToggle />
          <strong>{edu.name}</strong>, {edu.program}, {edu.year} (GPAX {edu.gpax})
        </li>
      {/each}
    </ul>
  </section>

  <!-- Section 2 -->
  <section>
    <HideToggle />
    <h2 class={h2clsx}>Work Experience</h2>
    <hr />

    {#each experiences as experience}
      <Work data={experience} />
    {/each}
  </section>

  <!-- Section 3 -->
  <section>
    <HideToggle />
    <h2 class={h2clsx}>Volunteer Experience</h2>
    <hr />

    <Contribution data={volunteers} />
  </section>

  <!-- Section 4 -->
  <section>
    <HideToggle />
    <h2 class={h2clsx}>Open Source Contribution</h2>
    <hr />

    <Contribution data={ossContribs} />
  </section>

  <!-- Section 5 -->
  <section>
    <HideToggle />
    <h2 class={h2clsx}>Base Skills</h2>
    <hr />

    <ul>
      {#each baseSkills as skill}
        <li>
          <HideToggle />
          {skill}
        </li>
      {/each}
    </ul>
  </section>

  <!-- Section 6 -->
  <section>
    <HideToggle />
    <h2 class={h2clsx}>Side Projects</h2>
    <hr />

    <ul>
      {#each sideProjects as project}
        <Project data={project} />
      {/each}
    </ul>
  </section>

  <!-- Section 7 -->
  <section>
    <HideToggle />
    <h2 class={h2clsx}>Activities & Awards</h2>
    <hr />

    <ul>
      {#each activities as activity}
        <li>
          <HideToggle />
          <strong>{activity.name}</strong>, {activity.description}
        </li>
      {/each}
    </ul>
  </section>

  <!-- Section 8 -->
  <section>
    <HideToggle />
    <h2 class={h2clsx}>Certificates</h2>
    <hr />

    <div class="flex">
      {#each certificates as certificate}
        <Certificate {...certificate} />
      {/each}
    </div>
  </section>

  <footer class="print-only">
    (See in <a href={fullVersionLink} target="_blank" rel="noreferrer">web</a>
    for full version or view
    <a href={sourceLink} target="_blank" rel="noreferrer">source code</a>)
  </footer>
</main>

<style lang="postcss">
  main {
    overflow-x: hidden;
  }

  a {
    text-decoration: underline;
  }

  section {
    @apply my-4;
  }

  section h2 {
    @apply font-semibold;
  }

  section hr {
    @apply mb-2 mt-0;
    border-color: darkgrey;
  }

  section > ul {
    @apply list-disc pl-8 text-left;
  }

  :global(.print-only) {
    display: none;
  }

  :global(main.display-mode .hide-toggle) {
    display: none;
  }

  @media print {
    * {
      @apply text-xs;
    }

    :global(.print-only) {
      display: inherit;
    }

    :global(.web-only) {
      display: none;
    }

    ul {
      @apply pl-6;
    }

    section {
      @apply my-2;
    }

    section hr {
      @apply mb-1 mt-0;
    }

    main {
      margin: 0 0;
      padding: 0;
    }
  }
</style>
