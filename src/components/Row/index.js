import React from "react";
import "./style.css";

const Row = (props) => {
  return (
    <div className="row" id={props.rowID || "portfolio-row"}>
      {props.children}
    </div>
  );
};

export default Row;
