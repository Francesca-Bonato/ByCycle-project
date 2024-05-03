import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Componente per il brand con il logo
function CustomNavbarBrand() {
  return (
    <Navbar.Brand href="#home" className="ms-4 me-auto">
      <img
        src
        height="30"
        className="d-inline-block align-top me-4"
        alt="Logo"
      />
    </Navbar.Brand>
  );
}

function NavBar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary border-bottom border-black "
    >
      <Container fluid>
        {/* Utilizza un componente personalizzato per il brand con il logo */}
        <CustomNavbarBrand />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="me-3">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="me-3">
              Bikes
            </Nav.Link>
            <Nav.Link href="#" className="me-3">
              Accessories
            </Nav.Link>
            <Nav.Link href="#" className="me-3">
              Community
            </Nav.Link>
            <Nav.Link href="#" className="me-3">
              Blog
            </Nav.Link>
            <Nav.Link href="#" className="me-3">
              Contact
            </Nav.Link>
          </Nav>
          <button className="btn btn-outline-primary rounded-pill ms-2 px-3 py-2 custom-btn">
            Book a Test Ride
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
