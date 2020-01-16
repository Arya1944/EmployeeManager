import React, { Component } from "react";

class Liked extends Component {
  getIcon(liked) {
    const cName = "fa fa-heart";

    return liked === true ? cName : cName + "-o";
  }

  render() {
    return (
      <i
        className={this.getIcon(this.props.liked)}
        onClick={this.props.onClick}
      />
    );
  }
}

export default Liked;
