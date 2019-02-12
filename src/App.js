import React, { Component } from "react";
import "./App.css";
import Grille from "./components/Grille";

class App extends Component {
  state = {
    markX: "X",
    markO: "O",
    round: 0,
    cases: []
  };

  win = () => {
    if (
      (this.state.cases[0] === this.state.markX &&
        this.state.cases[1] === this.state.markX &&
        this.state.cases[2] === this.state.markX) ||
      (this.state.cases[3] === this.state.markX &&
        this.state.cases[4] === this.state.markX &&
        this.state.cases[5] === this.state.markX) ||
      (this.state.cases[6] === this.state.markX &&
        this.state.cases[7] === this.state.markX &&
        this.state.cases[8] === this.state.markX) ||
      (this.state.cases[0] === this.state.markX &&
        this.state.cases[3] === this.state.markX &&
        this.state.cases[6] === this.state.markX) ||
      (this.state.cases[1] === this.state.markX &&
        this.state.cases[4] === this.state.markX &&
        this.state.cases[7] === this.state.markX) ||
      (this.state.cases[2] === this.state.markX &&
        this.state.cases[5] === this.state.markX &&
        this.state.cases[8] === this.state.markX) ||
      (this.state.cases[0] === this.state.markX &&
        this.state.cases[4] === this.state.markX &&
        this.state.cases[8] === this.state.markX) ||
      (this.state.cases[6] === this.state.markX &&
        this.state.cases[4] === this.state.markX &&
        this.state.cases[2] === this.state.markX)
    ) {
      return "Winner: X";
    } else if (
      (this.state.cases[0] === this.state.markO &&
        this.state.cases[1] === this.state.markO &&
        this.state.cases[2] === this.state.markO) ||
      (this.state.cases[3] === this.state.markO &&
        this.state.cases[4] === this.state.markO &&
        this.state.cases[5] === this.state.markO) ||
      (this.state.cases[6] === this.state.markO &&
        this.state.cases[7] === this.state.markO &&
        this.state.cases[8] === this.state.markO) ||
      (this.state.cases[0] === this.state.markO &&
        this.state.cases[3] === this.state.markO &&
        this.state.cases[6] === this.state.markO) ||
      (this.state.cases[1] === this.state.markO &&
        this.state.cases[4] === this.state.markO &&
        this.state.cases[7] === this.state.markO) ||
      (this.state.cases[2] === this.state.markO &&
        this.state.cases[5] === this.state.markO &&
        this.state.cases[8] === this.state.markO) ||
      (this.state.cases[0] === this.state.markO &&
        this.state.cases[4] === this.state.markO &&
        this.state.cases[8] === this.state.markO) ||
      (this.state.cases[6] === this.state.markO &&
        this.state.cases[4] === this.state.markO &&
        this.state.cases[2] === this.state.markO)
    ) {
      return "Winner: O";
    } else if (this.state.round % 2 === 0) {
      return "Next Player: X";
    } else if (this.state.round % 2 !== 0) {
      return "Next Player: O";
    }
  };

  handleAddMark = index => {
    if (this.win() === "Winner: X" || this.win() === "Winner: O") {
      return;
    } else {
      if (this.state.cases[index] === "X" || this.state.cases[index] === "O") {
        return;
      } else {
        if (this.state.round % 2 === 0) {
          const newCase = [...this.state.cases];
          newCase[index] = this.state.markX;
          this.setState({ cases: newCase, round: this.state.round + 1 });
        } else if (this.state.round % 2 !== 0) {
          const newCase = [...this.state.cases];
          newCase[index] = this.state.markO;
          this.setState({ cases: newCase, round: this.state.round + 1 });
        }
      }
    }
  };

  render() {
    this.win();
    return (
      <div className="App">
        <h1>Tic-Tac-Toe</h1>
        <div style={{ fontWeight: "bold" }}>{this.win()}</div>
        <br />
        <Grille
          style={{ width: "50px", color: "white" }}
          param={this.state}
          handleClick={this.handleAddMark}
        />
      </div>
    );
  }
}

export default App;
