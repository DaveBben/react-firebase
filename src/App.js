import React, { Component } from 'react';
import './App.css';
import fire from './config/Fire';
import Home from './Home';
import Login from './Login';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);import React, { Component } from 'react';
import './App.css';
import fire from './config/Fire';
import Home from './screens/Home';
import Login from './screens/Login';
import Profile from './screens/Profile';

class App extends Component {
constructor(props) {
   super(props)
   this.state = {
     error: null,
     loggedIn: null,
     loggedOut: null,
   }
 }
componentWillMount = () => {
this.setState({ loading: true})
  fire.auth().onAuthStateChanged((user) => {
    if(user) {
      this.setState({ loggedIn: true, loggedOut: false, loading: false  });
    }
    else {
      this.setState({ loggedIn: false, loggedOut: true, loading: false });
    }
  });
}

  render() {
    return (
      <div>
        {this.state.loggedIn ?
              <Home />
        : null }
        {this.state.loggedOut ?
              <Login />
        : null }
        {this.state.loading ?
        <div class="container">
          <div class="alert bg-white text-center shadow-sm rounded border p-3 m-4" role="alert">
          Loading ...
        </div></div>
        : null }
      </div>
    );
  }
}

export default App;

      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <Home />
        ) :
          (
            <Login />
          )}
      </div>
    );
  }
}

export default App;
