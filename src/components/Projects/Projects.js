import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import bolt from "../../Assets/Projects/bolt.png";
import kode from "../../Assets/Projects/kode.png";
import suicide from "../../Assets/Projects/suicide.png";
import pnemu from "../../Assets/Projects/pnemu.jpeg";

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
              imgPath={kode}
              isBlog={false}
              title="Kode"
              description="Developed a online editor with realtime sharing feature which uses really less bandwidth compared to Streaming
the whole window as a video, i have used ReactJs for front end and NodeJs as the backend for data exchange i have used Sockets.io to deploy my backend in railway i have also made a docker container using .docker file. in
this web app people can create session and join together to collaborate and learn or share their code together"
              ghLink="https://github.com/kamalnath2003/Combined-Kode"
              stack="React ,node, sockets.io ,docker ,vercel ,railway"
              demoLink="https://kode-full-railway.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pnemu}
              isBlog={false}
              title="Pneumonia Classifier"
              description="develop a deep learning model for detecting the covid, pneumonia image classification by convolutional neural
network algorithm for potentially classifying the results in the form of best accuracy."
stack="Python, flask, tensorflow, jupyter, anaconda "

              ghLink="https://github.com/kamalnath2003/PNEUMONIA-FINAL"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bolt}
              isBlog={false}
              title="Blind assistant"
              description="An assistant system is made and can be powered by raspberry pi which has ability to aprovide feedbacks about obstacles and also have many features like emergency calling, playing songs from youtube,can convert txt to handwriting , and can also predict future stocks , it is powered by python and many other modules "
              ghLink="https://github.com/kamalnath2003/bolt-final"
stack="Python, kiwi, tensorflow, coco model, opencv "

              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
