import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";
import "./style.css";

const Card = (props) => {
  return (
    <div className="card" key={props.projectIndex}>
      <figure className="figure card-img-top">
        <img
          src={props.project.image}
          alt={props.project.imageText}
          className="rounded mx-auto d-block img-fluid img-thumbnail imgsize portfolio-img"
        />
      </figure>
      <div className="card-body">
        <h5 className="card-title">{props.project.title}</h5>
        <p className="card-text">{props.project.shortDescription}</p>
      </div>
      <div className="card-footer m-auto">
        <div
          className="btn-group m-auto"
          role="group"
          aria-label="Project Buttons"
        >
          <Link
            to={props.project.githubURL}
            className="btn btn-secondary active mr-1"
          >
            <GitHubIcon /> GitHub
          </Link>
          <Link
            to={props.project.websiteURL}
            className="btn btn-secondary active ml-1"
          >
            <LinkIcon />
            Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
