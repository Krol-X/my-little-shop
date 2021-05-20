<script>
  import Router from 'svelte-navaid/Router.svelte';
  import Route from 'svelte-navaid/Route.svelte';

  import PageNotFound from './_notfound.svelte';
  import HomePage from './home.svelte';
  import CatalogPage from './catalog.svelte';
  import AboutPage from './about.svelte';
</script>

<Router>
  <Route path="/">
    <HomePage/>
  </Route>
  <Route path="/catalog">
    <CatalogPage/>
  </Route>
  <Route path="/about">
    <AboutPage/>
  </Route>

  <Route>
    <PageNotFound/>
  </Route>
</Router>