import React from "react";
import "./style.css";

const Jumbotron = (props) => {
  return <div className="jumbotron bg-dark text-white">{props.children}</div>;
};

export default Jumbotron;
