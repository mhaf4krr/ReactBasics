import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <span> <h2>NavBar Total Count : {this.props.count} </h2> </span>
      </nav>
    );
  }
}

export default NavBar;
