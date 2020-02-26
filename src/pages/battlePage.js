import React, { Component } from 'react';
import client from '../feathers';
import BattleBoard from '../components/battleBoard';

class BattlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  render() {
    return (
      <div className="container">
        <h1>HAY THIS IS THE BATTLE PAGE!!!</h1>
        <BattleBoard />
      </div>
    );
  }
}

export default BattlePage