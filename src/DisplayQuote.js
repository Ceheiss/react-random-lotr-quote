import React from "react";
import AuthorImage from "./AuthorImage";

const DisplayQuote = props => {
  const displayStyle = {
    margin: "auto",
    padding: 40,
    width: 520,
    height: 350,
    background: "#eee",
    color: "#333",
    borderRadius: 7
  };
  return (
    <div style={displayStyle} id="container">
      <h4 style={{ fontSize: "1.5em" }}>{props.quote}</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <p>{props.author}</p>
        <AuthorImage imageUrl={props.imageUrl} />
      </div>
    </div>
  );
};
export default DisplayQuote;
