import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar(){
  return (
    <div>
      <Navbar expand="lg" className="bg-danger">
        <Container>
          <Navbar.Brand href="/" className="font-italic" >SneakerXplorer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/forum">Forum</Nav.Link>
              <Nav.Link href="/resell">Resell</Nav.Link>
              <Nav.Link href="/view">Sneakers</Nav.Link>
              <Nav.Link href="/calendar">Calendar</Nav.Link>
              <Nav.Link href="/register">Sign Up</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
      <Navbar expand="lg" bg="dark"></Navbar>
    </div>
   

  )
}
export default NavBar
