<script>
  import Slogan from '../mainPageSections/Slogan.svelte';
  import Links from '../mainPageSections/links/Links.svelte';
</script>
<style>
  article {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr 0.5fr;
    grid-template-areas:
    'slogan'
    'links';

    gap: max(4vw, 4vh);
    height: 100%;
  }

  section {
    display: flex;
    flex: 1 0 auto;
  }

  #slogan {
    grid-area: slogan;
  }

  #links {
    grid-area: links;
  }
</style>

<article>
  <section id="slogan">
    <Slogan />
  </section>
  <section id="links">
    <Links />
  </section>
</article>