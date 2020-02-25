import React, { Component } from 'react';
import client from '../feathers';

class HeroPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  render() {
    return (
      <div className="container">
        <h1>HAY THIS IS THE HERO PAGE!!!</h1>
      </div>
    );
  }
}

export default HeroPage