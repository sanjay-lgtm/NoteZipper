import { Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">

      <Container fluid>
        <Navbar.Brand href="/">NoteZippper</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav.Link href="/mynotes">
              My Notes
            </Nav.Link>

            <NavDropdown title="Sanjay Sharma" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

