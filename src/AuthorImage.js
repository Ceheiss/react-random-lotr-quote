import React from "react";

const AuthorImage = props => {
  const imageStyle = {
    marginLeft: "1.5em",
    width: 150,
    height: 150,
    borderRadius: 150
  }
  return <img style={imageStyle} src={props.imageUrl} alt="Lord of the rings character"/>
}

export default AuthorImage;
