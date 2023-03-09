import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar(props) {
  return (
    <Navbar>
      <Container fluid className="navBar">
        <div className="header">
          <div className="headerName">
            <Navbar.Brand id="name" href="#home">Kristen Schaefer</Navbar.Brand>
            <h3 id='subtitle'>they/them</h3>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="headerNav">
                <Nav.Link href="/about" className={props.page === 'about' ? "text-selected-text" : ''}><h4 className="linkText">About</h4></Nav.Link>
                <Nav.Link href="/portfolio" className={props.page === 'portfolio' ? "text-selected-text" : ''}><h4 className="linkText">Portfolio</h4></Nav.Link>
                <Nav.Link href="/contact" className={props.page === 'contact' ? "text-selected-text" : ''}><h4 className="linkText">Contact</h4></Nav.Link>
                <Nav.Link href="/resume" className={props.page === 'contact' ? "text-selected-text" : ''}><h4 className="linkText">Resume</h4></Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/kristen-schaefer-dev/" target="_blank"><img src="./images/linkedin-logo.svg" id="liLogo"></img></Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>

  )
}

export default NavigationBar;




