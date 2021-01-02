import React from "react";

function Article(props) {
  const size = props.size
    .split(" ")
    .map((size) => "col-" + size)
    .join(" ");
  return <article className={`${size} text-left`}>{props.children}</article>;
}

export default Article;
