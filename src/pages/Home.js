import React from "react";
import Article from "../components/Article";
import Container from "../components/Container";
import Row from "../components/Row";
import SectionHeader from "../components/SectionHeader";
import Figure from "../components/Figure";
import ContactButtons from "../components/ContactButtons";

function Home() {
  return (
    <Container>
      <Row>
        <SectionHeader header="About Me" />
      </Row>
      <Row>
        <div className="col-md-3 text-center border-right">
          <Figure
            src="assets/images/head0.jpg"
            alt="a picture of Wilmar Stephens"
            caption="Wilmar Stephens"
          />
        </div>

        <Article size="md-9">
          <p>
            Infrastructure Engineer working primarily in the AWS Cloud. Emphasis
            on DevOps practices including infrastructure as code (IaC) and
            configuration management. Current tools include Ansible, Terraform,
            Jenkins.
          </p>
          <p>
            Working on a certificate in Full Stack Development establishing the
            skills to extend, build, and maintain custom tools.
          </p>
          <p>Other interests include consuming music, TV, and film.</p>
        </Article>
      </Row>
      <Row>
        <ContactButtons />
      </Row>
    </Container>
  );
}

export default Home;
