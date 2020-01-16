import React, { Component } from "react";

class navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Number{this.props.totalCounters}
        </span>
      </nav>
    );
  }
}

export default navbar;
