import Container from 'react-bootstrap/Container';
import '../assets/css/Portfolio.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import study from '../assets/images/study-budd-homepage.png';
import weather from '../assets/images/weather.png';
import eedb from '../assets/images/ee-database.png';
import note from '../assets/images/note-taker.png';
import social from '../assets/images/social.png';
import ecomm from '../assets/images/ecomm.png';

function Portfolio() {

  const folio = [
    {
      title: "Study Budd - Online Study Group App",
      description: "This was a group project where we created a web application where students can create and host study groups virtually. Users are able to create, view, and join virtual study groups. Users are also able to post resource links to their study groups.",
      image: study,
      alt: "image of app",
      site: "https://study-bud.herokuapp.com/",
      github: "https://github.com/EshuShango/study-group-project",
      tech: ["MD Bootstrap", "SQL", "JavaScript", "Express", "Node", "Axios", "Metered"]
    },
    {
      title: "Weather Dashboard - 5 Day Forecast",
      description: "Web App allowing users to search for a 5 day weather forecast. Searched locations are stored locally for future reference.",
      image: weather,
      alt: "image of app",
      site: "https://kcschaefs.github.io/weather-app/",
      github: "https://github.com/kcschaefs/note-taker-app",
      tech: ["JavaScript", "Bootstrap", "JSON", "API", "Local Storage"]
    },
    {
      title: "Employee Database Manager",
      description: "Node command line employee database manager allowing an employer to add and update employees, roles, and departments.",
      image: eedb,
      alt: "image of app",
      site: "https://drive.google.com/file/d/1aEL40zY5gkbIiVmtxB7QI3tLaBUXLMLX/view",
      github: "https://github.com/kcschaefs/employee-db-manager",
      tech: ["JavaScript", "SQL", "Inquirer"]
    },
    {
      title: "Note Taker App",
      description: "Express  webapp allowing users to create, view, and delete notes.",
      image: note,
      alt: "image of app",
      site: "https://drive.google.com/file/d/1aEL40zY5gkbIiVmtxB7QI3tLaBUXLMLX/view",
      github: "https://github.com/kcschaefs/employee-db-manager",
      tech: ["JavaScript", "Express", "Heroku"]
    },
    {
      title: "Social Network API",
      description: "Express command line social media API using MongoDB. CRUD for users, friends, thoughts, and reactions.",
      image: social,
      alt: "image of app",
      site: "https://drive.google.com/file/d/1_Ogvl1CEl9Rg_WdNgCFPuPuVxHsU3ckF/view",
      github: "https://github.com/kcschaefs/social-network-api",
      tech: ["JavaScript", "Express", "Insomnia", "MongoDB"]
    },
    {
      title: "Ecommerce Backend",
      description: "Express command line ecommerce backend using SQL. CRUD for categories, products, and tags.",
      image: ecomm,
      alt: "image of app",
      site: "https://drive.google.com/file/d/15oFkdJL2QVC5Q6CET3cDwwEOGwxOU5h1/view",
      github: "https://github.com/kcschaefs/ecomm-backend",
      tech: ["JavaScript", "Express", "Insomnia", "SQL"]
    }
  ]

  return (
    <Container className="portfolioSection">
      <div>
        <Carousel className="pCar">
          {folio.map(work => (
            <Carousel.Item key={work.id}>
              <div className="moreLinks">
                <a href={work.site} target="_blank"><button>View App</button></a>
                <a href={work.github} target="_blank"><button>GitHub Repo</button></a>
              </div>
              <a href={work.site} target="_blank"><img
                className="portfolioImages d-block w-50"
                src={work.image}
                alt={work.alt}
              /></a>
              <div className="descriptor">
                <Card className="descriptorCard">
                  <h3 className="aboutTitle">{work.title}</h3>
                  <div className="techStack">
                    {work.tech.map(t => {
                      return (
                        <div key={t}><Badge className="tech" bg="light">{t}</Badge></div>
                      )
                    })}
                  </div>
                  <div>
                    <p className="description">{work.description}</p>
                  </div>
                </Card>

              </div>

            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container >
  );
}

export default Portfolio;
