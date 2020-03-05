import React, { Component } from 'react';
import client from '../feathers';
import BattleBoardSquare from './battleBoardSquare';

class HeroComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    console.log('props: ', this.props);
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <span>Hero component</span>
      </div>
    );
  }
}

export default HeroComponent