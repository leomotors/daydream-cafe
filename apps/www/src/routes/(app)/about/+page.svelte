<script lang="ts">
  import { Links } from "@daydream-cafe/constants";
  import Award from "svelte-bootstrap-icons/lib/Award.svelte";
  import Briefcase from "svelte-bootstrap-icons/lib/Briefcase.svelte";

  import { ExtLink, Image, LinkButton } from "$components/elements";
</script>

<main>
  <h1 class="text-center text-4xl font-bold">About me</h1>

  <div
    class="mx-auto flex max-w-4xl flex-col-reverse items-center justify-center gap-8 p-4 lg:flex-row lg:items-start"
  >
    <!-- Left Panel -->
    <section class="flex flex-col gap-2">
      <p class="text-xl sm:text-2xl">
        Hello, My name is <b>Nutthapat Pongtanyavichai</b> preferred to be
        called by my nickname <b>Leo</b>
      </p>

      <p class="text-lg sm:text-xl">
        I am a Software Engineer who loves to create things on my
        <ExtLink href="https://github.com/Leomotors">GitHub</ExtLink>
      </p>

      <ul class="my-2">
        <li>
          <p>🎂</p>
          <p>18 Years Old</p>
        </li>
        <li>
          <p>🏫</p>
          <p>
            Chulalongkorn University &rarr; Computer Engineering CP49 Intania106
          </p>
        </li>
        <li>
          <p>🏢</p>
          <p>
            Software Engineer at
            <ExtLink href="https://brikl.com/jobs">Brikl</ExtLink>
          </p>
        </li>
        <li>
          <p>🥈</p>
          <p>Computer Olympic Student</p>
        </li>
      </ul>

      <p class="text-xl font-bold">More Info on</p>
      <section class="my-2 flex justify-start gap-2">
        <LinkButton name="Portfolio" to={Links.portfolio} size="sm">
          <Award width="20" height="20" />
        </LinkButton>

        <LinkButton name="Public Resume" to={Links.resume} size="sm">
          <Briefcase width="20" height="20" />
        </LinkButton>
      </section>
    </section>

    <!-- Right Panel, showing picture | Upper on mobile -->
    <section>
      <Image
        class="aspect-square w-56 max-w-xs rounded-full shadow-2xl sm:w-80"
        src="leo_read_kob_book"
        alt="Me reading Kob's Book"
      />
    </section>
  </div>
</main>

<style lang="scss">
  ul > li {
    @apply flex justify-start gap-2 text-lg sm:text-xl;
  }
</style>
