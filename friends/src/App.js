import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friends from './components/Friends';


class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        errorMessage: '',
        friends: [],
      }
    }

    componentDidMount() {
      this.getFriends();
    }

    getFriends = () => {
      axios
        .get('http://localhost:5000/friends/')
        .then(response => {
          this.setState({ friends: response.data });
        })
        .catch(error => {
          this.setState({ errorMessage: error.message })
        });
    };

    handelTextInput = event => {
      this.setState({ [event.target.name]: event.target.value });
    }

    saveFriendData = () => {
      const friend = {name: this.state.name, age: this.state.age, email: this.state.email };
      axios
        .post('http://localhost:5000/friends/create', friend)
        .then(response => {
          this.getFriends();
        })
        .catch(error => {
          this.setState({ errorMessage: error.message})
        });
      this.setState({ name: "", age: "", email: "" });
    };

    render() {
      return (
        <div className="App">
        {this.state.friends.map(friend => (
            <Friends 
            key={friend.id}
            friend={friend} 
            />
            ))
          };
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Friends List</h1>
          </header>
          <input
            type="text"
            onChange={this.handelTextInput}
            placeholder="Name"
            name="name"
            value={this.state.name}
          />
           <input
            type="text"
            onChange={this.handelTextInput}
            placeholder="Age"
            name="age"
            value={this.state.age}
          />
           <input
            type="text"
            onChange={this.handelTextInput}
            placeholder="Email"
            name="email"
            value={this.state.email}
          />
          <button onClick={this.saveFriendData}>Add Friend</button>
          {this.state.friends.map(friend => (
            <Friends 
            friend={friend} 
            getFriends={this.getFriends} />
            ))
          }; */}

        </div>
      )
    }
}

export default App;
