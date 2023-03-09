import Container from 'react-bootstrap/Container';
import '../assets/css/About.css'
import MyResume from './Tech-Resume-Kristen-Schaefer.pdf'
import { Document, Page } from 'react-pdf'
import SinglePagePDFViewer from "./pdf/single-page";

console.log(MyResume);

function Resume() {
  return (
    <Container fluid>
      <div className="resumeSection">
        <h1>Resume</h1>
        <a href='./Tech-Resume-Kristen-Schaefer.pdf' download>Click to download</a>
        <SinglePagePDFViewer pdf={MyResume} />
      </div>
    </Container>
  );
}

export default Resume;