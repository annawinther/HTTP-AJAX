import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


const StyledFriendsList = styled.div`
    border: 1px solid black;
    margin-top: 20px;
    margin-left: 25%;
    width: 50%;
    display: flex;
    flex-direction: column;
    /* text-align: center;
    align-content: center;
    align-items: center; */
`;

class Friends extends React.Component {

    render(){
        const { friend } = this.props;
        // console.log(friend);
        return (
            //  friends.map(friend => {
            //      return (
                <StyledFriendsList>
                    <h3>Name: {friend.name}</h3>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </StyledFriendsList>
                     
            //      )
            //  })
        )

    }
}

export default Friends;

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

//  export default function Friends ( props ) {
//     const { friend } = this.props;
//    return (
//         friends.map(friend => {
//             return (
//                 <p>
//                     Name: {friend.name}<br />
//                     Age: {friend.age}<br />
//                     Email: {friend.email}
//                 </p>
//             )
//         })
//      )
// }   
  
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