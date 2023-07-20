import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Tilt } from 'react-tilt';
import milho from './Logo/milho.png';

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            55,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

function Navigation() {
  return (
    
    <Navbar collapseOnSelect expand="lg" sticky='top' className="bg-body-tertiary ">
      <Container>
      <Tilt className='Tilt br2 shadow-2 pointer ' options={defaultOptions} style={{ height: 100, width: 100 }}>
             <div className='Tilt-inner pa3'><img style={{padding: '5px'}} src={milho} alt=''/></div>
         </Tilt>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#Home" as={'bold'}>Home</Nav.Link>
            <Nav.Link href="#Sellers">Sellers</Nav.Link>
            <Nav.Link href="#deets">Products</Nav.Link>
            <Nav.Link href="#deets">About Us</Nav.Link>
          </Nav>
          <Nav>
          <NavDropdown title="Language" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Portuguese</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="#marketplace">
             Marketplace
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;