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
              <input name="username" type="text" />
              <button>Register</button>
            </form>
          :
            <p>Welcome {username}!</p>
        }
      </div>
    );
  }
}

export default App;
