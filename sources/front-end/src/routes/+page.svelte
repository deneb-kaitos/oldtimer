<script>
  export const prerender = true;

  import Slogan from '../mainPageSections/Slogan.svelte';
  import Links from '../mainPageSections/Links.svelte';
  import Contacts from '../mainPageSections/contacts/Contacts.svelte';
</script>
<style>
  article {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
    grid-template-areas:
    'slogan'
    'links'
    'contacts';

    gap: max(1vw, 1vh);
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

  #contacts {
    grid-area: contacts;
  }
</style>

<article>
  <section id="slogan">
    <Slogan />
  </section>
  <section id="links">
    <Links />
  </section>
  <section id="contacts">
    <Contacts />
  </section>
</article>