import React from 'react';

const DisplayQuote = props => {
  const displayStyle = {
    margin: "auto",
    padding: 40,
    width: 400,
    height: 200,
    background: "lightblue",
    borderRadius: 7
  }
  return (
    <div style={displayStyle} id="container">
      <h4>{props.quote}</h4>
      <p>{props.author}</p>
    </div>
  )
}


export default DisplayQuote;