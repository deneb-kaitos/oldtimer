<script>
  export const prerender = true;
</script>
<style>
  ul {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    justify-content: center;
    align-items: stretch;
    gap: 1vh;

    & li {
      display: flex;
      height: 2rem;
      border-bottom: 1px solid var(--theme-darkest_white);

      & a {
        display: flex;
        flex: 1 0 auto;
        justify-content: flex-end;
        align-items: center; 
        font-size: calc(var(--main-font-size) - 4pt);
      }
    }
  }
</style>
<ul>
  <li>
    <a href="tel:+4917638000034" target="_blank" rel="external">+4917638000034</a>
  </li>

  <li>
    <a href="tel:89055585948" target="_blank" rel="external">89055585948</a>
  </li>

  <li>
    <a href="mailto:andrey.paymushin@gmail.com?subject=[business inquiry]" target="_blank" rel="external">andrey.paymushin@gmail.com</a>
  </li>
</ul>