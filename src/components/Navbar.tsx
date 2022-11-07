import { Container, Nav, Navbar as NavbarBootstrap } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Wheelorama } from "../components/Wheelorama";

export function Navbar() {
  return (
    <NavbarBootstrap sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <NavbarBootstrap.Brand>
          <Wheelorama />
        </NavbarBootstrap.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/wheely-cool-app/" as={NavLink}>
            Question
          </Nav.Link>
          <Nav.Link to="/wheely-cool-app/wheel" as={NavLink}>
            Answer
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBootstrap>
  );
}
