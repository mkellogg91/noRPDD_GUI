import React, { Component } from 'react';
import client from '../feathers';

class HeroPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.loggedInUser = document.cookie.substring(document.cookie.indexOf("=") + 1);
  }


  componentDidMount() {
    console.log('here is client ', client);

    console.log('here is our logged in username: ', this.loggedInUser);
    
    client.service('users').find({
      query: {
        email: this.loggedInUser
      }
    }).then((data)=>{
      console.log('users returned: ', data);
      client.service('heroes').find({
        query: {
          userId: data.data._id
        }
      }).then((heroes)=>{
        console.log('my heroes returned! ', heroes);
      })
    })
    

  }

  render() {
    return (
      <div className="container">
        <h1>My Heroes</h1>
      </div>
    );
  }
}

export default HeroPage