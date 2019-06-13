import React from 'react';
// import logo from './logo.svg';
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
      }
    }

    // newAgeInput = React.createRef();

    // idToGetInput = React.createRef();  this.idToGetInput.current.value

    // newNameInput = React.createRef();

    // newAgeInput = React.createRef();
    
    // newEmailInput = React.createRef();

    // idToReplaceInput = React.createRef();

    // nameToReplaceInput = React.createRef();

    // ageToReplaceInput = React.createRef();

    // idToDeleteInput = React.createRef();


    componentDidMount() {
      this.getFriends();
    }

      // crud operations
    getFriends = () => {
      axios
        .get(friendsApi)
        .then(response => {
          this.setState({ friends: response.data });
        })
        .catch(error => {
          this.setState({errorMessage: error.message});
        });
    };

    saveFriendData = (event) => {
      event.preventDefault();
      console.log('submitted');
      const newFriend = {
        name: this.state.name, 
        age: parseInt(this.state.age), 
        email: this.state.email };
      axios
        .post(friendsApi, newFriend)
        .then(response => 
          this.setState({ friends: response.data, name: '', email: '', age: '' })
        );
    };
   
    
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
            {this.state.friends.map(friend => (
            <Friends 
            key={friend.id}
            handleTextInput={this.handleTextInput}
            friend={friend} 
           />
           )) 
         }
         {/* <div>
          <h5>[POST] a new friend</h5>
          name: <input type='text' ref={this.newNameInput} /><br />
          age: <input type='text' ref={this.newAgeInput} /><br />
          <button onClick={this.postNewFriend}>postNewFriend</button>
          </div> */}
         <FriendsForm 
            name={name}
            age={age}
            email={email}
            handleTextInput={this.handleTextInput}
            saveFriendData={this.saveFriendData}


         />
          {/* <FriendsForm 
           postNewFriend={this.postNewFriend}
           newNameInput={this.newNameInput}
           newAgeInput={this.newAgeInput}
           newEmailInput={this.newEmailInput}
           saveFriendData={this.saveFriendData}
           /> */}
          </div>
        </div>
       
      )
    }
}

export default App;
