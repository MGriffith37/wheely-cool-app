import { Container, Nav, Navbar as NavbarBootstrap } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <NavbarBootstrap className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/wheely-cool-app/" as={NavLink}>
            Options
          </Nav.Link>
          <Nav.Link to="/wheely-cool-app/wheel" as={NavLink}>
            Wheel
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBootstrap>
  );
}
