<script>
  import Link from 'svelte-navaid/Link.svelte';
</script>

<div id="menu">
  <div>
    <Link class="menu-link" href="/">Home</Link>
    |
    <Link class="menu-link" href="/catalog">Catalog</Link>
    |
    <Link class="menu-link" href="/about">About</Link>
  </div>
  <div id="menu-logo">
    My Little Shop
  </div>
  <div>
    <Link class="menu-link account-link" href="/login">Login</Link>
    |
    <Link class="menu-link account-link" href="/register">Register</Link>
  </div>
</div>

<style>
  #menu {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: solid thin #333;
  }
  div > #menu {
    height: fit-content;
  }
  :global(#menu-logo) {
    padding: 0;
    font-size: 1.4em;
  }
  :global(.menu-link) {
    padding: 5px 5px;
    border: solid 1px #008;
  }
  :global(.account-link) {
    color: red;
  }
</style>