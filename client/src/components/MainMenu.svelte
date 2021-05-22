<script>
  import { url } from "@roxi/routify";
  import {
    Icon,
    Navbar, NavbarBrand,
    Nav, NavItem, NavLink
  } from 'sveltestrap';
</script>

<Navbar color="light" light expand="md">
  <Nav navbar>
    <NavItem>
      <NavLink href={$url('/')}>Home</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href={$url('/catalog')}>Catalog</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href={$url('/about')}>About</NavLink>
    </NavItem>
  </Nav>
  <NavbarBrand class="mx-auto">
    <Icon name="book-half"/>
    My Little Shop
  </NavbarBrand>
  <Nav navbar>
    <NavItem>
      <NavLink href={$url('/login')}>Login</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href={$url('/register')}>Register</NavLink>
    </NavItem>
  </Nav>
</Navbar>