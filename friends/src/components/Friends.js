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

}

export default Friends;