import React, { Component } from "react";
import Navitem from "./Navitem";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: ""
    };
  }

  activeitem = x => {
    if (this.state.NavItemActive.length > 0) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove("active");
    }
    this.setState({ NavItemActive: x }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    });
  };

  render() {
    return (
      <nav>
        <ul>
          <Navitem item="Home" tolink="/" active={this.activeitem} />
          <Navitem item="About" tolink="/about" active={this.activeitem} />
          <Navitem item="Sklls" tolink="/skills" active={this.activeitem} />
          <Navitem item="Contact" tolink="/contact" active={this.activeitem} />
          <Navitem item="Project" tolink="/project" active={this.activeitem} />
        </ul>
      </nav>
    );
  }
}
export default Navbar;
