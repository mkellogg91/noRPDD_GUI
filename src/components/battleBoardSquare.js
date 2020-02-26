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
      <td className="board-square">
        <div className="square-contents">
          <div>
            <span>X: {this.props.xVal}</span>
          </div>
          <div>
            <span>Y: {this.props.yVal}</span>
          </div>
        </div>
      </td>
    );
  }
}

export default BattleBoardSquare