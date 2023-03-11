import Container from 'react-bootstrap/Container';
import '../assets/css/About.css';


function About() {
  return (
    <Container fluid >
      <div className="aboutSection">
        <div className="aboutTitle">
          <h1>About Me</h1>
        </div>
        <div className="aboutFlex">
          <div className='avatar'>
            <img src="./images/avatar.png" id='avatar' alt='avatar' />
          </div>
          <div className="aboutText">
            <div className="textFlex">
              <p className="text">Pronouns: they/them</p>
              <p className="text">Web Developer based in Minneapolis with over 10 years of business experience. I enjoy working in a collaborative and flexibile environment that focuses on quality + effectiveness and creating functional user experiences.</p>
            </div>
            <div className="linkFlex">
            <a href='/portfolio'>
                <button><img className="downloadIcon" src="./images/eye.png" />My Portfolio</button></a>
              <a href='./Tech-Resume-Kristen-Schaefer.pdf' download>
                <button><img className="downloadIcon" src="./images/download.png" />My Resume</button></a>
            </div>
          </div>
        </div>
      </div>
    </Container >
  );
}

export default About;