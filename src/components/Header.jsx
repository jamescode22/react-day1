import React, { Component } from "react";
import Nav from "./Nav";

class Header extends Component {
  render() {
    const { headerText } = this.props;
    return (
      <header>
        <h1>{headerText}</h1>
        <Nav></Nav>
      </header>
    );
  }
}

export default Header;
