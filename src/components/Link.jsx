import React, { Component } from "react";

class Link extends Component {
  render() {
    const {
      link: { name, url },
    } = this.props;
    return (
      <p>
        <a href="{url}">{name}</a>
      </p>
    );
  }
}

export default Link;
