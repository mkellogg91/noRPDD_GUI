import React, { Component } from "react";
import LoginPage from './pages/loginPage';
import ChatPage from './pages/chatPage';
import client from './feathers';
import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/homePage";
import BattlePage from "./pages/battlePage";
import HeroPage from "./pages/heroPage";
import HeroCreatePage from "./pages/heroCreatePage";

class Application extends Component {
  constructor(props) {
    super(props)

    this.state = {};
  }

  componentDidMount() {
    const messages = client.service('messages');
    const users = client.service('users');

    console.log('users', users)
    console.log('messages', messages)

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
    client.on('logout', () => {
      this.setState({
        login: null,
        messages: null,
        users: null
      })
    });

    // add messages to the message list
    messages.on('created', message => this.setState({
      messages: this.state.messages.concat(message)
    }));

    // add new users to the user list
    users.on('created', user => this.setState({
      users: this.state.users.concat(user)
    }));
  }

  render() {
    if (this.state.login === undefined) {
      return <main className="container text-center">
        <h1>Loading...</h1>
      </main>;
    }

    // if we are logged in
    else if (this.state.login) {
      //return <ChatPage messages={this.state.messages} users={this.state.users} />
      return (
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/battlePage" component={BattlePage} />
          <Route path="/heroPage" component={HeroPage} />
          <Route path="/chatPage" render={()=> <ChatPage users={this.state.users} messages={this.state.messages} />} />
          <Route path="/heroCreate" component={HeroCreatePage} />
        </Switch>
      );

    }

    // if not logged in, return login page
    return <LoginPage></LoginPage>
  }
}

export default Application;
