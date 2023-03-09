import '../assets/css/Portfolio.css';
import Card from 'react-bootstrap/Card';

function WorkCard() {
  return (
    <div>
      <Card className="mainCard">
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title><h4>Study Budd - Online Study Group App</h4></Card.Title>
          <Card.Text>
            <p className="mainCardText">This was a group project where we created a web application where students can create and host study groups virtually. Users are able to create, view, and join virtual study groups. Users are also able to post resource links to their study groups.</p>
          </Card.Text>
          <Card.Link href="https://study-bud.herokuapp.com/" target="_blank">Deployed App</Card.Link>
          <Card.Link href="https://github.com/EshuShango/study-group-project" target="_blank">GitHub Repo</Card.Link>
        </Card.Body>
      </Card>
    </div>

    
  );
}

export default WorkCard;