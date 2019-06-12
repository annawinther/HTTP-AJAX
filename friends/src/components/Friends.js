import React from 'react';
import axios from 'axios';

class Friends extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showUpdateFriend: false,
            name: '',
            age: '',
            email: '',
        };   
    }
    handelTextInput = event => {
     this.setState({ [event.target.name]: event.target.value });
    };

    showUpdateFriend = () => {
        this.setState({ showUpdateFriend: !this.state.showUpdateFriend });
    }

    de


    fetchFriendWithNativeFetch = () => {
        //spinner on 
        this.setState( { spinner: true });

        fetch('http://localhost:5000/friends')
            .then(response => {
                return response.json();
            })
            .then(parsedData => {
                this.setState({ friend: parsedData });
            })
            .catch(error => {
                this.setState({ errorMessage: error.message });
            })
            .finally(() => {
                this.setState({ spinner: false });
            }) 

    }
}

export default Friends;