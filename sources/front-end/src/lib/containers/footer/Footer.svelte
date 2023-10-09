<script>
  export const prerender = true;
  import PhoneIcon from "$lib/icons/PhoneIcon.svelte";
  import MailIcon from "$lib/icons/MailIcon.svelte";
</script>
<style>
  footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 1fr;

    & div {
      display: flex;
      flex: 1 0 auto;
      justify-content: center;
      align-items: center;

      & a, a > svg {
        display: flex;
      }

      & a > svg {
        width: var(--main-font-size);
        color: var(--theme-white);
      }
    }
  }
</style>
<footer>
  <!-- <div>
    <a href="tel:017638000034" target="_blank">
      <PhoneIcon />
    </a>
  </div>

  <div>
    <a href="tel:89055585948" target="_blank">
      <PhoneIcon />
    </a>
  </div>

  <div>
    <a href="mailto:andrey.paymushin@gmail.com?subject=[business inquiry]" target="_blank">
      <MailIcon />
    </a>
  </div> -->
</footer>