import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import SectionHeader from "../components/SectionHeader";
import ContactButtons from "../components/ContactButtons";

function Contact() {
  return (
    <Container>
      <Row>
        <SectionHeader header="Contact" />
      </Row>
      <Row>
        <ContactButtons />
      </Row>
    </Container>
  );
}

export default Contact;
