import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ecommerce Website",
      description: "Design & Development",
      imgUrl: projImg1,
      githubUrl: "https://github.com/Lamistashkeel/Amazon-clone",
    },
    {
      title: "Weather-App",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Personal-finance-management-system",
      description: "planner & budgeting app",
      imgUrl: projImg3,
    },
    {
      title: "Climate-data-analysis",
      description: "Data analysis and visualization",
      imgUrl: projImg4,
    },
    {
      title: "solar-power-generation-analysis",
      description: "Data analysis and visualization",
      imgUrl: projImg5,
    },
    {
      title: " Zameen.com Real Estate Data Analysis",
      description: "Data analysis and visualization",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I’ve developed a range of full-stack web applications, including a budgeting planner, management system, online store, and a weather app that integrates live APIs for real-time forecasts all built with a focus on performance, usability, and responsive design.

In data analysis and visualization, I’ve worked on exploratory data analysis (EDA) projects involving real estate trends, climate data, and solar power generation, transforming raw datasets into meaningful insights through data cleaning, analysis, and professional visualizations.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => (
  <ProjectCard key={index} {...project} />
))
                          }
                      
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>-</p>
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