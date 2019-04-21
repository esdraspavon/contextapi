import React, { Component } from "react";
import Teams from "./components/Teams";
class App extends Component {
  state = {
    teams: [
      {
        name: "Real Madrid",
        titles: 35
      },
      {
        name: "Barcelona",
        titles: 25
      },
      {
        name: "Atlético de Madrid",
        titles: 10
      }
    ]
  };
  render() {
    return (
      <div className="container">
        <Teams teams={this.state.teams} />
      </div>
    );
  }
}

export default App;
