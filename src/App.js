import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Header headerText="This is a heading" />
        <Main />
      </>
    );
  }
}

export default App;
