import React from "react";

function Figure(props) {
  return (
    <figure className="figure">
      <img
        className="figure-img img-fluid rounded"
        src={props.src}
        alt={props.alt}
      />
      <figcaption className="figure-caption text-center">
        {props.caption || null}
      </figcaption>
    </figure>
  );
}

export default Figure;
