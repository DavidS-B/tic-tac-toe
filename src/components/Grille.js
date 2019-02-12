import React, { Component } from "react";
import "./Grille.css";

export class Grille extends Component {
  render() {
    return (
      <div className="backColor">
        <div className="fullSquare">
          <div
            className="square"
            id="one"
            onClick={() => {
              this.props.handleClick(0);
            }}
          >
            {this.props.param.cases[0]}
          </div>
          <div
            className="square"
            id="two"
            onClick={() => {
              this.props.handleClick(1);
            }}
          >
            {this.props.param.cases[1]}
          </div>
          <div
            className="square"
            id="three"
            onClick={() => {
              this.props.handleClick(2);
            }}
          >
            {this.props.param.cases[2]}
          </div>
          <div
            className="square"
            id="four"
            onClick={() => {
              this.props.handleClick(3);
            }}
          >
            {this.props.param.cases[3]}
          </div>
          <div
            className="square"
            id="five"
            onClick={() => {
              this.props.handleClick(4);
            }}
          >
            {this.props.param.cases[4]}
          </div>
          <div
            className="square"
            id="six"
            onClick={() => {
              this.props.handleClick(5);
            }}
          >
            {this.props.param.cases[5]}
          </div>
          <div
            className="square"
            id="seven"
            onClick={() => {
              this.props.handleClick(6);
            }}
          >
            {this.props.param.cases[6]}
          </div>
          <div
            className="square"
            id="eight"
            onClick={() => {
              this.props.handleClick(7);
            }}
          >
            {this.props.param.cases[7]}
          </div>
          <div
            className="square"
            id="nine"
            onClick={() => {
              this.props.handleClick(8);
            }}
          >
            {this.props.param.cases[8]}
          </div>
        </div>
      </div>
    );
  }
}

export default Grille;
