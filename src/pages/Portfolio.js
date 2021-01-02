import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Card from "../components/Card";
import SectionHeader from "../components/SectionHeader";
import ContactButtons from "../components/ContactButtons";

import Projects from "../Projects.json";

function Portfolio() {
  return (
    <Container>
      <Row>
        <SectionHeader header="Portfolio" />
      </Row>
      <Row rowID="project-row">
        {Projects.map((item, index) => (
          <Card project={item} key={index} />
        ))}
      </Row>
      <Row>
        <ContactButtons />
      </Row>
    </Container>
  );
}

export default Portfolio;
