<script lang="ts">
  import staticPaths from "@daydream-cafe/posts/staticPaths";
</script>

<main>
  <p>Work in progress</p>

  <div>
    {#each staticPaths as path}
      <a href={path}>{path}</a>
    {/each}
  </div>
</main>
