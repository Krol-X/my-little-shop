<script>
  import Header from './pages/_header.svelte';
  import Footer from './pages/_footer.svelte';

  import routes from './routes'
  import Router from 'svelte-spa-router';

  // import {serverApi} from './config';
  // import axios from 'axios';
  //
  // let name = 'client';
  // axios.get(serverApi).then(it => name = it.data);
</script>

<Header />
<Router {routes} />
<Footer />
