import React, { Component } from "react";

class Team extends Component {
  render() {
    const { name, titles } = this.props.data;
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <p className="m-0">{name}</p>
        <span className="badge badge-danger">{titles}</span>
      </li>
    );
  }
}

export default Team;
