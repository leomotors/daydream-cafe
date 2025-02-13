<script lang="ts">
  interface Props {
    src: string;
    alt: string;
    [key: string]: unknown;
  }

  let { src, alt, ...rest }: Props = $props();
</script>

<picture>
  <source type="image/avif" srcset="{src}.avif" />
  <source type="image/webp" srcset="{src}.webp" />
  <img src="{src}.webp" {alt} {...rest} />
</picture>
