import React, { Component } from 'react';
import client from '../feathers';
import BattleBoardSquare from './battleBoardSquare';

class BattleBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardRowNumber: 6,
      boardColNumber: 6,
      boardArray: []
    };

    
    console.log('props: ', this.props);
  }

  componentDidMount(){
    this.buildBoard();
  }

  // returns an array of square objects
  buildBoard = () => {

    // array for each row
    let xArr = [];

    // array holding row arrays
    let yArr = [];

    for (var y = 0; y < this.state.boardRowNumber; y++) {
      xArr = []
      for (var x = 0; x < this.state.boardColNumber; x++) {
        xArr.push( <td><BattleBoardSquare xVal={x} yVal={y} /></td> )
      }
      yArr.push(<tr>{xArr}</tr>)
    }

    console.log('length of y arr = ', yArr.length);

    // set the boardArray state prop to our built 2d array
    this.setState({
      boardArray: yArr
    })

  }


  render() {
    return (
      <div className="container">
        {this.state.boardArray ? this.state.boardArray : <span />}
      </div>
    );
  }
}

export default BattleBoard