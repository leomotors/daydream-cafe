<script lang="ts">
  import { Links } from "@daydream-cafe/constants";

  import { ExtLink, Image } from "../components";
</script>

<main class="flex flex-col items-center gap-4 text-center">
  <section>
    <div
      class="mx-auto flex max-w-4xl flex-col-reverse items-center justify-center gap-8 p-4 lg:flex-row lg:items-start"
    >
      <!-- Left Panel -->
      <section class="flex flex-col gap-2 text-left">
        <p class="font-bold text-xl sm:text-2xl">
          Nutthapat Pongtanyavichai <span>(Leo)</span>
        </p>

        <p class="text-lg sm:text-xl">
          I am a Software Engineer who loves to create things on my
          <ExtLink href={Links.github}>GitHub</ExtLink>
        </p>

        <p class="text-lg">
          JavaScript Web Developer, experienced in building with Next.js and
          SvelteKit. Hobby in Embedded Systems with ESP32.
        </p>

        <ul class="bruh my-2 [&>li]:flex [&>li]:gap-2">
          <li>
            <p>🎂</p>
            <p>20 Years Old</p>
          </li>
          <li>
            <p>🏫</p>
            <p>
              3<sup>rd</sup> Year Computer Engineering Student at Chulalongkorn University
            </p>
          </li>
          <li>
            <p>🏢</p>
            <p>
              Ex Platform Engineer at Brikl and Completed Agoda Summer
              Internship 2024
            </p>
          </li>
          <li>
            <p>💡</p>
            <p>Thinc. Core Team</p>
          </li>
        </ul>
      </section>

      <!-- Right Panel, showing picture | Upper on mobile -->
      <section>
        <Image
          class="aspect-square w-56 max-w-xs rounded-full shadow-2xl sm:w-80"
          src="/leo_read_kob_book"
          alt="Me reading Kob's Book"
        />
      </section>
    </div>
  </section>
</main>
