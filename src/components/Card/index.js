import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";
import "./style.css";

const Card = (props) => {
  return (
    <div className="card">
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
          <a
            href={props.project.githubURL}
            className="btn btn-secondary active mr-1"
          >
            <GitHubIcon /> GitHub
          </a>
          <a
            href={props.project.websiteURL}
            className="btn btn-secondary active ml-1"
          >
            <LinkIcon />
            Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
