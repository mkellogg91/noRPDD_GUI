import React, { Component } from 'react';
import client from '../feathers';

class BattleBoardSquare extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    console.log('props: ', this.props);
  }


  render() {
    return (
      <div className="container">
        <div className="board-square">
          <div>
            <span>X: {this.props.xVal}</span>
          </div>
          <div>
            <span>Y: {this.props.yVal}</span>
          </div>

        </div>
      </div>
    );
  }
}

export default BattleBoardSquare