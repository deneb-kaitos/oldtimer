<script>
  export const prerender = true;

  import PhoneIcon from '$lib/icons/PhoneIcon.svelte';
  import MailIcon from '$lib/icons/MailIcon.svelte';
</script>
<style>
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: max(1vw, 1vh);
    flex: 1 0 auto;

    & li {
      display: grid;
      grid-template-columns: 1fr 5fr;
      grid-template-rows: 1fr;
      gap: min(1vh, 1vw);
      align-items: center;
      font-size: calc(var(--main-font-size) - 2pt);

      & svg {
        width: var(--main-font-size);
        justify-self: center;
      }

      & a {
        display: flex;
        flex: 1 0 auto;
        justify-content: flex-end;
      }
    }
  }
</style>
<ul>
  <li>
    <PhoneIcon />
    <a href="tel:017638000034">0176 38 00 0034</a>
  </li>

  <li>
    <MailIcon />
    <a href="mailto:andrey.paymushin@gmail.com">andrey.paymushin@gmail.com</a>
  </li>
</ul>