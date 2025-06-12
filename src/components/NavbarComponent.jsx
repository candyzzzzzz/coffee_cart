import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-light shadow-sm">
      <Container>
        <Navbar.Brand href="#">CoffeeCart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto me-4 gap-2">
            <Nav.Link className="nav-link-custom" href="#about">
              About Us
            </Nav.Link>
            <Nav.Link className="nav-link-custom" href="#pricing">
              Pricing
            </Nav.Link>
            <Nav.Link className="nav-link-custom" href="#story">
              Our Story
            </Nav.Link>
            <Nav.Link className="nav-link-custom" href="#clients">
              Our Clients
            </Nav.Link>
            <Nav.Link className="nav-link-custom" href="#contact">
              Contact Us
            </Nav.Link>
          </Nav>
          <div className="d-flex">
            <Button className="me-2 nav-btn">Login</Button>
            <Button className="nav-btn">Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
