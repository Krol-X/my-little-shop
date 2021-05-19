<script>
  import Router from 'svelte-navaid/Router.svelte';
  import Route from 'svelte-navaid/Route.svelte';

  import PageNotFound from './_notfound.svelte';
  import PageHome from './Home.svelte';
  import PageAnother from './Another.svelte';
</script>

<Router>
  <Route path="/">
    <PageHome/>
  </Route>

  <Route path="/another">
    <PageAnother/>
  </Route>

  <Route>
    <PageNotFound/>
  </Route>
</Router>