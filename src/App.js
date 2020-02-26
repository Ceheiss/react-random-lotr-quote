import React from "react";
import DisplayQuote from "./DisplayQuote";
import LotrHeader from "./LotrHeader";
import Button from "./Button";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: "Yes, yes preciousss. Come and get some precioussss quotesss",
      author: "Gollum",
      image:
        "https://lotr-random-quote-api.herokuapp.com/lotr/images/gollum.jpg"
    };
  }

  onClickHandler = () => {
    fetch("/lotr/quote")
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data;
      })
      .then(data => {
        const { author, quote, image } = data;
        console.log(data);
        this.setState({
          author,
          quote,
          image
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <LotrHeader />
        <DisplayQuote
          author={this.state.author}
          quote={this.state.quote}
          imageUrl={this.state.image}
        />
        <Button clickHandler={this.onClickHandler} />
      </div>
    );
  }
}

export default App;
