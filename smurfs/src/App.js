import React, { Component } from "react";
import "./App.css";
import SmurfForm from "./SmurfForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Context</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <SmurfForm />
      </div>
    );
  }
}

export default App;
