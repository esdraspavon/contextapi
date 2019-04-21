import React, { Component } from "react";
import { TheLigueContext } from "./TheLigue";

class Team extends Component {
  render() {
    //const { name, titles } = this.props.data;
    return (
      <TheLigueContext.Consumer>
        {value => {
          return Object.keys(value.state).map(idTeam => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={idTeam}
            >
              <p className="m-0">
                {value.state[idTeam].name}
                <span className="ml-4 badge badge-danger">
                  {value.state[idTeam].titles}
                </span>
              </p>
            </li>
          ));
        }}
      </TheLigueContext.Consumer>
    );
  }
}

export default Team;
