import React, { Component } from "react";
import { TheLigueContext } from "./TheLigue";

class Team extends Component {
  render() {
    //const { name, titles } = this.props.data;
    return (
      <TheLigueContext.Consumer>
        {value => {
          console.log(value);
        }}
      </TheLigueContext.Consumer>
    );
  }
}

export default Team;
{
  /* <li className="list-group-item d-flex justify-content-between align-items-center">
        <p className="m-0">{name}</p>
        <span className="badge badge-danger">{titles}</span>
      </li> */
}
