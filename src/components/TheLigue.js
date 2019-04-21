import React, { Component } from "react";

//Crear el context
const TheLigueContext = React.createContext();

class TheLigue extends Component {
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
      <TheLigueContext.Provider value={{ state: this.state.teams }}>
        {this.props.children}
      </TheLigueContext.Provider>
    );
  }
}

export default TheLigue;
