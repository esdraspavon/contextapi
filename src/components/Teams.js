import React, { Component } from "react";
import Team from "./Team";

class Teams extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.teams.map(team => (
          <Team key={team.name} data={team} />
        ))}
      </React.Fragment>
    );
  }
}

export default Teams;
