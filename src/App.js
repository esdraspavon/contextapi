import React, { Component } from "react";
import Teams from "./components/Teams";
class App extends Component {
  state = {
    equipos: [
      {
        nombre: "Real Madrid",
        titulos: 35
      },
      {
        nombre: "Barcelona",
        titulos: 25
      },
      {
        nombre: "Atlético de Madrid",
        titulos: 10
      }
    ]
  };
  render() {
    return (
      <div className="container">
        <Teams />
      </div>
    );
  }
}

export default App;
