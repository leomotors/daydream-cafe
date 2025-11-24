<script lang="ts">
  import type { Experience } from "@daydream-cafe/data";

  interface Props {
    data: Experience;
  }

  let { data }: Props = $props();
  let { company, duration, positions } = $derived(data);
</script>

<div class="work-experience">
  <div class="mb-2 flex justify-start gap-4 font-bold print:mb-1">
    <p>{company}</p>
    <p>{duration}</p>
  </div>
  <ul class="list-disc pl-8 text-left print:pl-6">
    {#each positions as position, index (index)}
      <li>
        <p>
          <strong>{position.name}</strong>
          <span>{position.period}</span>
        </p>

        <p>Technologies: {position.technologies.join(", ")}</p>

        <ul class="list-disc pl-8 print:pl-6">
          {#each position.jobs as job, index (index)}
            <li>{job}</li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  @reference "../app.css";

  .work-experience {
    @apply my-4;
  }

  @media print {
    .work-experience {
      @apply my-1;
    }
  }
</style>
