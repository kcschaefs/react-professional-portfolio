import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Avatar from "../assets/avatar.png";
import LinkedIn from "../assets/linkedin-logo.svg";
import '../assets/css/Header.css';

function Header() {
  return (
    <Navbar>
      <Container fluid  className="navBar">
        <div className="header">
          <div className='avatar'>
            <img src={Avatar} id='avatar' alt='avatar' />
          </div>
          <div className="headerName">
            <Navbar.Brand id="name" href="#home">Kristen Schaefer</Navbar.Brand>
            <h3 id='subtitle'>they/them</h3>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="headerNav">
                <Nav.Link href="#link"><h4 className="linkText">About</h4></Nav.Link>
                <Nav.Link href="#link"><h4 className="linkText">Portfolio</h4></Nav.Link>
                <Nav.Link href="#link"><h4 className="linkText">Contact</h4></Nav.Link>
                <Nav.Link href="#link"><h4 className="linkText">Resume</h4></Nav.Link>
                <Nav.Link href="#link"><img src={LinkedIn} id="liLogo"></img></Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;