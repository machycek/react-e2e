import React, { Component } from 'react';
import './App.css';

function redirect (url) {
  history.pushState(undefined, undefined, url)
}

class App extends Component {
  constructor(props) {
		super(props)

		const userData = { username: false }
		const authorized = false

		this.state = {
		  authorized,
		  userData,
		}

		// always redirect to homepage as long are we are not saving any userData
		redirect('/')
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username: e.target.username.value,
    }

    this.setState({
      authorized: true,
      userData,
    })

    redirect('/welcome')
  }

  render() {
    const {
      userData: { username },
      authorized,
    } = this.state

    return (
      <div className="App">
        {
          !authorized
          ?
            <form onSubmit={this.handleSubmit} className="App-form">
              <input data-test="registerUsername" name="username" type="text" />
              <button data-test="registerSubmit">Register</button>
            </form>
          :
            <p>Welcome {username}!</p>
        }
      </div>
    );
  }
}

export default App;
