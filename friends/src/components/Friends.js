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

    // showUpdateFriend = () => {
    //     this.setState({ showUpdateFriend: !this.state.showUpdateFriend });
    // }

    // deleteFriend = (friendId) => {
    //     axios
    //         .delete(`http://localhost:5000/friends/${friendId}`)
    //         .then(response =>{
    //             this.props.getFriends();
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // };

    // updateFriend = (friendId) => {
    //     const friend = {};
    //     if (this.state.name !== '') {
    //         friend.name = this.state.name;
    //     }
    //     if (this.state.email !== '') {
    //         friend.email = this.state.email;
    //     }
    //     axios
    //         .put(`http://localhost:5000/friends/${friendId}`, friend)
    //         .then(response => {
    //             this.setState({ 
    //                 showUpdateFriend: false, 
    //                 name: '', 
    //                 age: '',
    //                 email: '',
    //              });
    //         this.props.getFriends();
    //         })
    //         .catch(error => {
    //             console.log(error)
    //      });
    // };

    render() {
        const { friend } = this.props;
        return (
            <div key={friend.id}>
            <h3>{friend.name}</h3>
            <div>{friend.age}</div>
            <div>{friend.email}</div>
            {/* <button onClick={()=> this.deleteFriend(friend._id)}>Delete Friend</button>
            <button onClick={this.showUpdateFriend}>Update Friend</button> */}

            {/* {
                this.state.showUpdateFriend ? (
                    <div>
                        <input 
                            type="text"
                            onChange={this.handelTextInput}
                            placeholder="name"
                            name='name'
                            value={this.state.name}
                        />
                         <input 
                            type="text"
                            onChange={this.handelTextInput}
                            placeholder="age"
                            name="age"
                            value={this.state.age}
                        />
                         <input 
                            type="text"
                            onChange={this.handelTextInput}
                            placeholder="email"
                            name="email"
                            value={this.state.email}
                        />
                    <button onClick={() => this.updateFriend(friend._id)}>
                        Save Updates
                    </button>
                </div>
                ) : null     
             } */}
            </div>
        );
    }

}


export default Friends;