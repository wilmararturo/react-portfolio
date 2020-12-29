import React from "react";

function Container(props) {
  return (
    <div className="container border border-dark p-2 my-2 bg-light">
      {props.children}
    </div>
  );
}

export default Container;
