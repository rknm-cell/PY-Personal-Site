import React from "react";
import "./styles.css"
export default function () {
  return (
    <div>
      <h1>{project.name}</h1>
      <img href={project.image}></img>
      <p>{project.description}</p>
      <p></p>
    </div>
  );
}
