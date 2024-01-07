<script lang="ts">
  import type { Certificate } from "@daydream-cafe/data";

  export let name: Certificate["name"];
  export let image: Certificate["image"];
  export let link: Certificate["link"];
</script>

<div class="certificate-card" title={name}>
  <a href={link} target="_blank" rel="noreferrer">
    <img src={image} alt="Image for {name}" class="h-[100px] print:h-[70px]" />
  </a>
</div>

<style lang="postcss">
</style>
