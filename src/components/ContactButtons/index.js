import React from "react";
import { Link } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./style.css";

function ContactButtons() {
  return (
    <div
      className="btn-group m-auto contact-buttons"
      role="group"
      aria-label="Contact Buttons"
    >
      <Link
        to="https://github.com/wilmararturo"
        className="btn btn-secondary btn-lg active mr-1"
        title="Wilmar's GitHub"
      >
        <GitHubIcon />
        GitHub
      </Link>
      <Link
        to="https://www.linkedin.com/in/wilmars"
        className="btn btn-secondary btn-lg active"
        title="Wilmar on Linkedin"
      >
        <LinkedInIcon />
        LinkedIn
      </Link>
      <Link
        to="mailto:wilmar.s@gmail.com"
        className="btn btn-secondary btn-lg active ml-1"
        title="Wilmar's E-mail"
      >
        <EmailIcon />
        E-Mail
      </Link>
    </div>
  );
}

export default ContactButtons;
