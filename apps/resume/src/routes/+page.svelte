<script lang="ts">
  import "../app.css";

  import Certificate from "$components/Certificate.svelte";
  import Contribution from "$components/Contribution.svelte";
  import Intro from "$components/Intro.svelte";
  import Project from "$components/Project.svelte";
  import Work from "$components/Work.svelte";

  // Resume Content
  import {
    activities,
    certificates,
    educations,
    experiences,
    fullVersionLink,
    fullVersionLinkShort,
    ossContribs,
    qualifications,
    sideProjects,
    sourceLink,
    volunteers,
  } from "@daydream-cafe/data";

  import Hideable from "$/components/Hideable.svelte";

  // Intro Data
  import { introData } from "../data";

  const h2clsx = "text-left text-2xl uppercase print:text-4xl font-semibold";
</script>

<header
  class="web-only w-screen bg-green-500 p-4 text-center text-white sm:p-6"
>
  <h1 class="text-4xl">Resumette</h1>
  <h3>
    <button onclick={() => window.print()} class="text-lg underline">
      [Print]
    </button>
  </h3>
  <p>
    Printer-friendly standard résumé template by
    <a href="https://github.com/narze/resume">narze</a>, any HTML tags with
    <code>web-only</code> CSS class will be hidden on print.
  </p>
  <p>
    You can click at any sections or lines hide some information before
    printing.
  </p>

  <p>
    [<a href={sourceLink} target="_blank" rel="noreferrer">Source</a>] [<a
      href="https://github.com/leomotors/daydream-cafe/blob/main/packages/data/src/index.ts"
      target="_blank"
      rel="noreferrer"
    >
      Data</a
    >]
  </p>

  <p>
    See all my other websites at
    <a href={"https://" + introData.website} target="_blank" rel="noreferrer">
      {introData.website}
    </a>
  </p>
</header>

<main class="m-0 max-w-(--breakpoint-xl) p-4 text-center md:m-8 xl:mx-auto">
  <Intro {...introData} />

  <!-- Section List: packages/data/src/index.ts -->

  <!-- Section 1 -->
  <section>
    <Hideable>
      <h2 class={h2clsx}>Education</h2>
      <hr />

      <ul>
        {#each educations as edu (edu.name)}
          <Hideable>
            <li>
              <strong>{edu.name}</strong>, {edu.program}, {edu.year} (GPAX {edu.gpax})
            </li>
          </Hideable>
        {/each}
      </ul>
    </Hideable>
  </section>

  <!-- Section 2 -->
  <section>
    <Hideable>
      <h2 class={h2clsx}>Work Experience</h2>
      <hr />

      {#each experiences as experience, index (index)}
        <Hideable>
          <Work data={experience} />
        </Hideable>
      {/each}
    </Hideable>
  </section>

  <!-- Section 3 -->
  <section>
    <Hideable>
      <h2 class={h2clsx}>Volunteer Experience</h2>
      <hr />

      <Contribution data={volunteers} />
    </Hideable>
  </section>

  <!-- Section 4 -->
  <section>
    <Hideable>
      <h2 class={h2clsx}>Open Source Contribution</h2>
      <hr />

      <Contribution data={ossContribs} />
    </Hideable>
  </section>

  <!-- Section 5 -->
  <section>
    <Hideable>
      <h2 class={h2clsx}>Side Projects</h2>
      <hr />

      <ul>
        {#each sideProjects as project (project.name)}
          <Hideable hide={!!project.hide}>
            <Project data={project} />
          </Hideable>
        {/each}
      </ul>
    </Hideable>
  </section>

  <!-- Section 6 -->
  <section>
    <Hideable>
      <h2 class={h2clsx}>Activities & Awards</h2>
      <hr />

      <ul>
        {#each activities as activity (activity.name)}
          <Hideable>
            <li>
              <strong>{activity.name}</strong>, {activity.description}
            </li>
          </Hideable>
        {/each}
      </ul>
    </Hideable>
  </section>

  <!-- Section 7 -->
  <section>
    <Hideable>
      <h2 class={h2clsx}>Qualifications</h2>
      <hr />

      <ul>
        {#each qualifications as qualification, index (index)}
          <Hideable>
            <li>
              {qualification}
            </li>
          </Hideable>
        {/each}
      </ul>
    </Hideable>
  </section>

  <!-- Section 8 -->
  <section>
    <Hideable>
      <h2 class={h2clsx}>Certificates</h2>
      <hr />

      <div class="flex">
        {#each certificates as certificate (certificate.name)}
          <Hideable>
            <Certificate {...certificate} />
          </Hideable>
        {/each}
      </div>
    </Hideable>
  </section>

  <footer class="print-only">
    (Visit <a href={fullVersionLink} target="_blank" rel="noreferrer">
      {fullVersionLinkShort}
    </a>
    for Full Version, Source Code in my GitHub)
  </footer>
</main>

<style lang="scss">
  @reference "../app.css";

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

  section ul {
    @apply list-disc pl-8 text-left;
  }

  :global(.print-only) {
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
