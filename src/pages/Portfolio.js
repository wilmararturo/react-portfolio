import React from "react";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import Row from "../components/Row";
import Card from "../components/Card";
import Projects from "../Projects.json";

function Portfolio() {
  return (
    <Container>
      <Jumbotron>
        <h1>Projects</h1>
      </Jumbotron>
      <hr></hr>
      <Row rowID="project-row">
        {Projects.map((item, index) => (
          <Card project={item} key={index} />
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
