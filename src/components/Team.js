import React, { Component } from "react";

class Team extends Component {
  render() {
    return <p>{this.props.data.name}</p>;
  }
}

export default Team;
