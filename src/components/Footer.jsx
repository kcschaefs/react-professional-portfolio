import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../assets/css/Footer.css'

function Footer() {
  return (
    <Container fluid className="footer">
      <div className="footerDiv">
      <p id="footerText">&copy; 2023 Kristen Schaefer</p>
      <Nav.Link href="https://github.com/kcschaefs" target="_blank"><img src="./images/github-mark-white.png" id="ghLogo"></img></Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/kristen-schaefer-dev/" target="_blank"><img src="./images/linkedin-logo.svg" id="liLogo"></img></Nav.Link>
      </div>
    </Container>
  );
}

export default Footer;