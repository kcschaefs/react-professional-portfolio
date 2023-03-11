import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

function NavigationBar(props) {
  const location = useLocation();
  return (
    <Container fluid className="navBar">
      <div className="header">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <div className="headerName">
            <Navbar.Brand as={Link} to="/about"><h1 id="name">Kristen Schaefer</h1></Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={location.pathname} className="linkText">
                <Nav.Link as={Link} to="/about" eventKey="/about" >About</Nav.Link>
                <Nav.Link as={Link} to="/portfolio" eventKey="/portfolio">Portfolio</Nav.Link>
                <Nav.Link to="/resume" as={Link} eventKey="/resume">Resume</Nav.Link>
                <Nav.Link to="/contact" as={Link} eventKey="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Container>


  )
}

export default NavigationBar;




