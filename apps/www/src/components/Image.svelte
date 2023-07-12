<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<picture>
  <source type="image/avif" srcset="{src}.avif" />
  <source type="image/webp" srcset="{src}.webp" />
  <img src="{src}.webp" {alt} {...$$restProps} />
</picture>
