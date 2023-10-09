<script>
  import Header from "$lib/containers/header/Header.svelte";
  import Footer from "$lib/containers/footer/Footer.svelte";
</script>
<style>
</style>
<Header />
<main>
  <slot />
</main>
<Footer />