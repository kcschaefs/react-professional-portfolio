import Container from 'react-bootstrap/Container';
import '../assets/css/Portfolio.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';


function Portfolio() {

  const folio = [
    {
      title: "Study Budd - Online Study Group App",
      description: "This was a group project where we created a web application where students can create and host study groups virtually. Users are able to create, view, and join virtual study groups. Users are also able to post resource links to their study groups.",
      image: './images/study-budd-homepage.png',
      alt: "image of app",
      site: "https://study-bud.herokuapp.com/",
      github: "https://github.com/EshuShango/study-group-project"
    },
    {
      title: "Weather Dashboard - 5 Day Forecast",
      description: "Web App allowing users to search for a 5 day weather forecast. Searched locations are stored locally for future reference.",
      image: './images/weather.png',
      alt: "image of app",
      site: "https://kcschaefs.github.io/weather-app/",
      github: "https://github.com/kcschaefs/note-taker-app"
    },
    {
      title: "Employee Database Manager",
      description: "Node command line employee database manager allowing an employer to add and update employees, roles, and departments.",
      image: './images/ee-database.png',
      alt: "image of app",
      site: "https://drive.google.com/file/d/1aEL40zY5gkbIiVmtxB7QI3tLaBUXLMLX/view",
      github: "https://github.com/kcschaefs/employee-db-manager"
    },
    {
      title: "Note Taker App",
      description: "Express  webapp allowing users to create, view, and delete notes.",
      image: './images/note-taker.png',
      alt: "image of app",
      site: "https://drive.google.com/file/d/1aEL40zY5gkbIiVmtxB7QI3tLaBUXLMLX/view",
      github: "https://github.com/kcschaefs/employee-db-manager"
    },
    {
      title: "Social Network API",
      description: "Express command line social media API using MongoDB. CRUD for users, friends, thoughts, and reactions.",
      image: './images/social.png',
      alt: "image of app",
      site: "https://drive.google.com/file/d/1_Ogvl1CEl9Rg_WdNgCFPuPuVxHsU3ckF/view",
      github: "https://github.com/kcschaefs/social-network-api"
    },
    {
      title: "Ecommerce Backend",
      description: "Express command line ecommerce backend using SQL. CRUD for categories, products, and tags.",
      image: './images/ecomm.png',
      alt: "image of app",
      site: "https://drive.google.com/file/d/15oFkdJL2QVC5Q6CET3cDwwEOGwxOU5h1/view",
      github: "https://github.com/kcschaefs/ecomm-backend"
    }
  ]

  return (
    <Container className="portfolioSection">
      <div className="aboutTitle">
        <h1>Portfolio</h1>
      </div>
      <div>
        <Carousel className="pCar">
          {folio.map(work => (
            <Carousel.Item key={work.id}>
              <a href={work.site} target="_blank"><img
                className="portfolioImages d-block w-50"
                src={work.image}
                alt={work.alt}
              /></a>

              <div className="descriptor">
                <h3>{work.title}</h3>
                <div className="links">
                  <p>{work.description}</p>
                  <div className="moreLinks">
                    <a href={work.site} target="_blank"><button>View App</button></a>
                    <a href={work.github} target="_blank"><button>GitHub Repo</button></a>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container >
  );
}

export default Portfolio;
