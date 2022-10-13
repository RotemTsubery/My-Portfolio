import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import portfolio from "../assets/img/my-portfolio-projects1.png";
import animalWebsite from "../assets/img/animal-website-projects.png";
import todo from "../assets/img/todo-projects.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Personal Portfolio",
      description: "React - Design & Developmen",
      imgUrl: portfolio,
      linkUrl: <a href="https://github.com/RotemTsubery" alt="my-github"></a>,
    },
    {
      title: "Animal Website",
      description: "C# - ASP.NET-CORE MVC",
      imgUrl: animalWebsite,
    },
    {
      title: "Todo Application",
      description: "React , JS , JSX , Bootstrap",
      imgUrl: todo,
    },
    {
      title: "Personal Portfolio",
      description: "Design & Development",
      imgUrl: portfolio,
    },
    {
      title: "Animal Website",
      description: "C# - ASP.NET-CORE MVC",
      imgUrl: animalWebsite,
    },
    {
      title: "Todo Application",
      description: "React , JS , JSX , Bootstrap",
      imgUrl: todo,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>These are my latest projects.
                    You can see them throgh GitHub.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">More Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">My CV</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>More projects...</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p> <a href="Rotem Tsubery CV 2022.pdf"
                          download="Rotem Tsubery CV 2022.pdf">

                          <button className="cv-button" >👇🏽 Download My CV!👇🏽 </button></a>
                        </p>
                        <p> Let's Get In Touch!</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
