import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NaviBar = () => {
    return(
      <div class="col-12">
  <Navbar bg="primary" variant="dark" expand="xl">
        <Nav className="mr-auto">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="./tanuki.jpeg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      AliaZ
      </Navbar.Brand>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
    <Nav className="mr-auto">
    <Navbar.Text>
        Signed in as: <a href="#login">Carnavalito</a>
      </Navbar.Text>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Configuraciones</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Modo oscuro</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
      </NavDropdown>
      </Nav>
  </Navbar>
</div>
    )
}

export default NaviBar;