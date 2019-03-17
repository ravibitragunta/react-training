import React from "react";

const person = () => {
  return (
    <div>
      <p> A paragraph </p>
      <p> {Math.floor(Math.random() * 30)} </p>
    </div>
  );
};

export default person;
