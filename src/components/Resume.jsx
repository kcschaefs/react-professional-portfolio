import Container from 'react-bootstrap/Container';
import '../assets/css/About.css'
import MyResume from './Tech-Resume-Kristen-Schaefer.pdf'
import { Document, Page } from 'react-pdf'
import SinglePagePDFViewer from "./pdf/single-page";
import '../assets/css/Resume.css';

console.log(MyResume);

function Resume() {
  return (
    <Container fluid>
      <div className="resumeSection">
      <div>
        <a href='./Tech-Resume-Kristen-Schaefer.pdf' download>
          <button><img className="downloadIcon" src="./images/download.png" />My Resume</button></a>
        </div>
        <div className="resumeEl">
            <SinglePagePDFViewer pdf={MyResume} />
        </div>
        
      </div>
    </Container>
  );
}

export default Resume;