import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import SaveIcon from "@material-ui/icons/Save";

function Resume() {
  return (
    <Jumbotron>
      <div className="row" id="contact-resume-row">
        <div
          className="btn-group m-auto"
          role="group"
          aria-label="Contact Buttons"
        >
          <Link
            to="assets/pdf/WilmarAStephens.pdf"
            className="btn btn-secondary btn-lg active"
            download="WilmarStephens.pdf"
          >
            <SaveIcon />
            Download Resume
          </Link>
        </div>
      </div>
    </Jumbotron>
  );
}

export default Resume;
