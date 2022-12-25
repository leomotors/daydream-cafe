<script lang="ts">
  import { Links } from "@daydream-cafe/constants";
  import Award from "svelte-bootstrap-icons/lib/Award.svelte";
  import Briefcase from "svelte-bootstrap-icons/lib/Briefcase.svelte";
  import CodeSquare from "svelte-bootstrap-icons/lib/CodeSquare.svelte";
  import GitHub from "svelte-bootstrap-icons/lib/Github.svelte";
  import JournalRichtext from "svelte-bootstrap-icons/lib/JournalRichtext.svelte";
  import Linkedin from "svelte-bootstrap-icons/lib/Linkedin.svelte";
  import Twitter from "svelte-bootstrap-icons/lib/Twitter.svelte";

  import { CgWebring, LinkButton } from "$components/elements";
</script>

<main class="flex flex-col items-center gap-4 text-center">
  <h1 class="text-3xl font-bold sm:text-4xl">Hello! I'm Leo ✨</h1>
  <h2 class="text-2xl font-bold sm:text-3xl">Nutthapat Pongtanyavichai</h2>

  <section class="my-2">
    <LinkButton name="Portfolio" to={Links.portfolio}>
      <Award width="32" height="32" />
    </LinkButton>

    <LinkButton name="Resume" to={Links.resume}>
      <Briefcase width="32" height="32" />
    </LinkButton>

    <LinkButton name="Blog" to={Links.blog}>
      <JournalRichtext width="32" height="32" />
    </LinkButton>

    <LinkButton name="Repo List" to={Links.repos}>
      <CodeSquare width="32" height="32" />
    </LinkButton>
  </section>

  <section class="my-2">
    <LinkButton name="GitHub" to={Links.github}>
      <GitHub width="32" height="32" />
    </LinkButton>

    <LinkButton name="Twitter" to={Links.twitter}>
      <Twitter width="32" height="32" />
    </LinkButton>

    <LinkButton name="LinkedIn" to={Links.linkedin}>
      <Linkedin width="32" height="32" />
    </LinkButton>
  </section>

  <h2 class="text-2xl font-bold">Webrings</h2>
  <section>
    <LinkButton
      name="Creatorsgarten"
      to="https://creatorsgarten.org/ring"
      size="sm"
    >
      <CgWebring />
    </LinkButton>
  </section>
</main>

<style lang="scss">
  section {
    @apply flex w-[calc(100vw-4rem)] flex-col justify-center gap-2 sm:w-1/2 lg:w-fit lg:flex-row;
  }
</style>
