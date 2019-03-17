import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> React Basic App</h1>
        <Person> </Person>
      </div>
    );

    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", { className: "App" }, "React App")
    // );
  }
}

export default App;
