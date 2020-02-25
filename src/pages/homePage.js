import React, { Component } from 'react';
import client from '../feathers';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  render() {
    return (
      <div className="container">
        <h1>HAY THIS IS THE HOME PAGE!!!</h1>
      </div>
    );
  }
}

export default HomePage