import React from "react";
import DisplayQuote from "./DisplayQuote";
import Button from "./Button";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: "Generic quote",
      author: "Generic author"
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
        const {author, quote} = data;
        this.setState({
          author,
          quote
        })
      })
      .catch(error => console.log(error));
    
  };

  render() {
    return (
      <div className="App">
        <h1>Lord of the Quotes</h1>
        <DisplayQuote author={this.state.author} quote={this.state.quote} />
        <Button clickHandler={this.onClickHandler} />
      </div>
    );
  }
}

export default App;
