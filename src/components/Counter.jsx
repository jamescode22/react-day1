import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  add = () => {
    this.setState({ count: this.state.count + 1 });
  };

  subtract = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.add}>Add</button>
        <h3>{this.state.count}</h3>
        <button onClick={this.subtract}>Subtract</button>
      </div>
    );
  }
}

export default Counter;
