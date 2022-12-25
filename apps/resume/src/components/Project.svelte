<script lang="ts">
  import HideToggle from "$components/HideToggle.svelte";

  export let project: {
    name: string;
    details: string;
    url: string;
  };
</script>

<li>
  <HideToggle />
  <strong>{project.name}</strong>
  - {project.details}
  <a href="https://{project.url}" target="_blank" rel="noreferrer">
    <strong>{project.url}</strong>
  </a>
</li>
