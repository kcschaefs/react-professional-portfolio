import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../assets/css/Footer.css'
import github from "../assets/images/github-mark-white.png";
import linkedin from "../assets/images/linkedin-logo.svg";

function Footer() {
  return (
    <Container fluid className="footer">
      <div className="footerDiv">
      <p id="footerText">&copy; 2023 Kristen Schaefer</p>
      <Nav.Link href="https://github.com/kcschaefs" target="_blank"><img src={github} id="ghLogo"></img></Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/kristen-schaefer-dev/" target="_blank"><img src={linkedin} id="liLogo"></img></Nav.Link>
      </div>
    </Container>
  );
}

export default Footer;