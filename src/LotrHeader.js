import React from "react";
import GondorTree from "./images/t-gondor-tree.png"

const LotrHeader = props => {
  return (
    <div id="header">
      <img src={GondorTree} id="gondor-tree" />
      <h1
        style={{
          fontFamily: "Cinzel Decorative",
          fontSize: "5em",
          color: "#eee",
          textShadow: "3px 3px #333",
          textAlign: "left"
        }}
      >
        The Lord<br/>of the Quotes
      </h1>
    </div>
  );
};

export default LotrHeader;
