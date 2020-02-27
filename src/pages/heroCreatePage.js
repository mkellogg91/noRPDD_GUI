import React, { Component } from 'react';
import client from '../feathers';
import BattleBoard from '../components/battleBoard';

class HeroCreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  render() {
    return (
      <div className="container">
        <h1>HAY THIS IS THE HERO CREATE PAGE!!!</h1>
        
      </div>
    );
  }
}

export default HeroCreatePage