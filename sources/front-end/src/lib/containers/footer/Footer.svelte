<script>
  export const prerender = true;
</script>
<style>
  footer {
    padding: 0 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

      & a {
        display: flex;
        flex: 1 0 auto;
        justify-content: center;
        width: 100%;
        height: 100%;
        align-items: center; 
        font-size: calc(var(--main-font-size) - 4pt);
      }
  
      & a, a:visited {
        color: var(--theme-white);
      }
  }
</style>
<footer>
  <a href="/contacts">contacts</a>
</footer>