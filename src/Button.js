import React from "react";

const Button = props => {
  const buttonStyle = {
    background: "#eee",
    border: "3px black solid",
    borderRadius: "3px",
    padding: "0.6em",
    fontSize: "15px",
    fontWeight: "bold",
    decoration: "none",
    margin: "1.5em 0"
  };

  return (
    <button style={buttonStyle} onClick={props.clickHandler}>
      Get some LOTR wisdom!
    </button>
  );
};

export default Button;
