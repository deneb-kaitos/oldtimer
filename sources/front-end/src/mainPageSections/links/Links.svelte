<script>
  export const prerender = true;
</script>
<style>
  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr;
    gap: max(1vw, 1vw);
    width: 100%;

    & li {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1 0 auto;
      background-color: var(--theme-glacier);
      border-radius: 2px;

      & a {
        display: flex;
        flex: 1 0 auto;
        justify-content: center;
        align-items: center;
        color: var(--theme-black);
        width: 100%;
      }
    }
  }

</style>
<ul>
  <li>
    <a href="/about">
about
    </a>
  </li>
  <li>
    <a href="/projects">
projects
    </a>
  </li>
</ul>