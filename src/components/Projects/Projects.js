import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Balsam from "../../Assets/Projects/Balsam.jpg";
import github from "../../Assets/Projects/github.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Balsam}
              isBlog={false}
              title="Balsam"
              description="application mobile developed with react native ,firebase ,it connect patient with professionals and Clinic to in home health care services."
              ghLink="https://github.com/yahyalegrini24/Balsam-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="GitHub-Cli"
              description="GitHub-Cli is a command-line interface (CLI) tool that helps you manage your GitHub repositories easily. With this tool, you can list your repositories, create a new repository and push your project, delete a repository, and even generate a README file with AI assistance.."
              ghLink="https://github.com/yahyalegrini24/GitHub-Cli"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
