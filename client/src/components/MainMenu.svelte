<script>
  import {
    Icon,
    Navbar, NavbarBrand,
    Nav, NavItem, NavLink
  } from 'sveltestrap';
</script>

<Navbar color="light" light expand="md">
  <Nav navbar>
    <NavItem>
      <NavLink href="/">Home</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/catalog">Catalog</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/about">About</NavLink>
    </NavItem>
  </Nav>
  <NavbarBrand class="mx-auto">
    <Icon name="book-half"/>
    My Little Shop
  </NavbarBrand>
  <Nav navbar>
    <NavItem>
      <NavLink href="/login">Login</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/register">Register</NavLink>
    </NavItem>
  </Nav>
</Navbar>