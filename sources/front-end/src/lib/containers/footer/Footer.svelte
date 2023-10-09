<script>
  export const prerender = true;
</script>
<style>
  footer {
    padding: 0 5vw;

  & ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: max(1vw, 1vh);
    flex: 1 0 auto;

    & li {
      display: flex;
      gap: min(1vh, 1vw);
      align-items: center;
      font-size: calc(var(--main-font-size) - 4pt);

      & a {
        display: flex;
        flex: 1 0 auto;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        align-items: center; 
        /* font-size: 0.8rem; */
      }

      & a, a:visited {
        color: var(--theme-white);
      }
    }
  }
  }
</style>
<footer>
<ul>
  <li>
    <a href="tel:017638000034" target="_blank">017638000034</a>
  </li>

  <li>
    <a href="tel:89055585948" target="_blank">89055585948</a>
  </li>

  <li>
    <a href="mailto:andrey.paymushin@gmail.com?subject=[business inquiry]" target="_blank">andrey.paymushin@gmail.com</a>
  </li>
</ul>
</footer>