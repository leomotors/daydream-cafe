<script lang="ts">
  import type { Experience } from "@daydream-cafe/data";

  export let data: Experience;
  $: ({ company, duration, positions } = data);
</script>

<div class="work-experience">
  <div class="mb-2 flex justify-start gap-4 font-bold print:mb-1">
    <p>{company}</p>
    <p>{duration}</p>
  </div>
  <ul class="list-disc pl-8 text-left print:pl-6">
    {#each positions as position}
      <li>
        <p>
          <strong>{position.name}</strong>
          <span>{position.period}</span>
        </p>

        <p>Technologies: {position.technologies.join(", ")}</p>

        <ul class="list-disc pl-8 print:pl-6">
          {#each position.jobs as job}
            <li>{job}</li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</div>

<style lang="postcss">
  .work-experience {
    @apply my-4;
  }

  @media print {
    .work-experience {
      @apply my-1;
    }
  }
</style>
