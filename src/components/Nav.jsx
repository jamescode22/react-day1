import React, { Component } from "react";
import Link from "./Link";

class Nav extends Component {
  render() {
    const navLinksData = [
      { id: 0, name: "Google", url: "http://www.google.com" },
      { id: 1, name: "Microsoft", url: "http://www.microsoft.com" },
    ];
    const navLinksJSX = navLinksData.map((link) => <Link link={link} />);

    return <nav>{navLinksJSX}</nav>;
  }
}

export default Nav;
