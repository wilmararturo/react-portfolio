import React from "react";

function Container(props) {
  return (
    <container className="container border border-dark p-2 my-2 bg-light">
      {props.children}
    </container>
  );
}

export default Container;
