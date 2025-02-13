<nav>
  <a href="/">Home</a> |
  <a href="/about">About</a> |
  <a href="https://medium.com/@leomotors" target="_blank" rel="noreferrer">
    Blogs
  </a>
</nav>

<style lang="scss">
  @reference "../styles.css";

  nav {
    @apply flex justify-center gap-2;
    @apply text-2xl font-bold;

    & > a {
      @apply transition-colors hover:text-slate-400;
    }
  }
</style>
