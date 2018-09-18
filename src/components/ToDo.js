import React from "react";

const ToDo = ({ onclick, completed, text }) => {
  <li onClick={onClick}>{text}</li>;
};

export default ToDo;
