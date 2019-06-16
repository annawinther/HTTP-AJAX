import React from 'react';
import './App.css';
import axios from 'axios';
import Friends from './components/Friends';
import FriendsForm from './components/FriendsForm';

const friendsApi = 'http://localhost:5000/friends';

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        errorMessage: '',
        friends: [],
        name: '',
        age: 0,
        email: '',
      }
    }

  idToGetInput = React.createRef();

    componentDidMount() {
      this.getFriends();
    }

    getFriends = () => {
      axios
        .get(friendsApi)
        .then(response => {
          this.setState({ friends: response.data });
        })
        .catch(error => {
          this.setState({ errorMessage: error.message });
        });
    };

    saveFriendData = (event) => {
      event.preventDefault();
      const { name, age, email } = this.state;

      if (name !== "" && age !== 0 && email !== ""){
        const newFriend = {
          name: this.state.name, 
          age: this.state.age, 
          email: this.state.email 
        };
        axios
          .post(friendsApi, newFriend)
          .then(response => 
            this.setState({ friends: response.data, name: '', email: '', age: 0 })
          );
      };
    }
     
   
    deleteFriend = (id) => {
      // const id = this.idToGetInput.current.value;
      axios
      .delete(`${friendsApi}/${id}`)
      .then(() => {
        this.getFriends();
      })
    }
    

    handleTextInput = event => {
      event.preventDefault();
      this.setState({ [event.target.name]: event.target.value });
    }

  
    render() {
      const { name, age, email } = this.state;
      return (
        <div className="App">
         <div >
            <h1>Friends List</h1>
            <Friends 
            deleteFriend={this.deleteFriend}
            friends={this.state.friends}
           />
         <FriendsForm 
            name={name}
            age={age}
            email={email}
            handleTextInput={this.handleTextInput}
            saveFriendData={this.saveFriendData}
           
         />
          </div>
        </div>
       
      )
    }
}

export default App;
