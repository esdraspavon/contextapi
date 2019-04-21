import React, { Component } from "react";
import Teams from "./components/Teams";
import TheLigue from "./components/TheLigue";
class App extends Component {
  render() {
    return (
      <div className="container">
        <TheLigue>
          <Teams
          //teams={this.state.teams}
          />
        </TheLigue>
      </div>
    );
  }
}

export default App;
