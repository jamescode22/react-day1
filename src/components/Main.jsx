import React, { Component } from "react";

import Counter from "./Counter";

class Main extends Component {
  render() {
    return (
      <>
        <h3>Web page main content</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eum illo architecto possimus sint corrupti dolore deserunt doloremque rerum.
          Officiis dolor odio sapiente soluta cum aspernatur facere laudantium officia iusto?
        </p>
        <h4>It's counter time:</h4>
        <Counter />
      </>
    );
  }
}

export default Main;
