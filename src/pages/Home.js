import React from "react";
import Article from "../components/Article";
import Container from "../components/Container";

function Home() {
  return (
    <Container>
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
    </Container>
  );
}

export default Home;
