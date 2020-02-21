import React, { Component } from "react";
import LoginPage from './pages/loginPage';
import ChatPage from './pages/chatPage';
import client from './feathers';

class Application extends Component {
  constructor(props) {
    super(props)

    this.state = {};
  }

  componentDidMount() {
    const messages = client.service('messages');
    const users = client.service('users');

    // try to authenticate with JWT stored in local storage
    client.authenticate().catch(() => this.setState({ login: null }));

    // on successful login
    client.on('authenticated', login => {
      // get all users and messages
      Promise.all([
        messages.find({
          query: {
            $sort: { createdAt: -1 },
            $limit: 25
          }
        }),
        users.find()
      ]).then(([messagePage, userPage]) => {
        // we want the latest messages but in the reversed order
        const messages = messagePage.data.reverse();
        const users = userPage.data;

        // once both return update the state
        this.setState({ login, messages, users })
      });
    });

    // on logout reset all local state
    client.on('logout', ()=>{this.setState({
      login: null,
      messages: null,
      users: null
    })});

    // add messages to the message list
    messages.on('created', message => this.setState({
      messages: this.state.messages.concat(message)
    }));

    // add new users to the user list
    users.on('crated', user => this.setState({
      users: this.state.users.concat(user)
    }));
  }

  render(){
    if(this.state.login === undefined){
      return <main className="container text-center">
        <h1>Loading...</h1>
      </main>;
    } else if(this.state.login) {
      return <ChatPage messages={this.state.messages} users={this.state.users} />
    }

    return <LoginPage></LoginPage>
  }
}

export default Application;
