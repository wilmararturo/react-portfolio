import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import SectionHeader from "../components/SectionHeader";
import SaveIcon from "@material-ui/icons/Save";
import ContactButtons from "../components/ContactButtons";

function Resume() {
  return (
    <Container>
      <Row>
        <SectionHeader header="Resume" />
      </Row>
      <div className="row" id="contact-resume-row">
        <div
          className="btn-group m-auto"
          role="group"
          aria-label="Contact Buttons"
        >
          <a
            href="assets/pdf/WilmarAStephens.pdf"
            className="btn btn-secondary btn-lg mb-3 active"
            download="WilmarStephens.pdf"
          >
            <SaveIcon />
            Download Resume
          </a>
        </div>
      </div>
      <Row>
        <ContactButtons />
      </Row>
    </Container>
  );
}

export default Resume;
