import PageNotFound from './pages/_notfound.svelte';
import HomePage from './pages/home.svelte';
import CatalogPage from './pages/catalog.svelte';
import AboutPage from './pages/about.svelte';

export default {
  '/': HomePage,
  '/catalog': CatalogPage,
  '/about': AboutPage,
  '*': PageNotFound
}
