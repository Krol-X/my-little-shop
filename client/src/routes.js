import PageNotFound from './pages/_notfound.svelte';
import HomePage from './pages/index.svelte';
import CatalogPage from './pages/catalog.svelte';
import AboutPage from './pages/about.svelte';
import LoginPage from './pages/login.svelte';
import RegisterPage from './pages/register.svelte';

export default {
  '/': HomePage,
  '/catalog': CatalogPage,
  '/about': AboutPage,
  '/login': LoginPage,
  '/register': RegisterPage,
  '*': PageNotFound
};