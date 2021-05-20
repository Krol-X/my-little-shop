<script>
  // import Router from 'svelte-navaid/Router.svelte';
  // import Route from 'svelte-navaid/Route.svelte';
  import { Router, Route } from "svelte-routing";

  import PageNotFound from './_notfound.svelte';
  import HomePage from './home.svelte';
  import CatalogPage from './catalog.svelte';
  import AboutPage from './about.svelte';

  let url = "";
</script>

<Router url="{url}">
  <Route path="/" component={HomePage} />
  <Route path="/catalog" component={CatalogPage} />
  <Route path="/about" component={AboutPage} />

  <Route component={PageNotFound} />
</Router>