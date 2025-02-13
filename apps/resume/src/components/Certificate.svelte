<script lang="ts">
  import type { Certificate } from "@daydream-cafe/data";

  interface Props {
    name: Certificate["name"];
    image: Certificate["image"];
    link: Certificate["link"];
  }

  let { name, image, link }: Props = $props();
</script>

<div class="certificate-card" title={name}>
  <a href={link} target="_blank" rel="noreferrer">
    <img src={image} alt="Image for {name}" class="h-[100px] print:h-[70px]" />
  </a>
</div>

<style lang="scss">
</style>
