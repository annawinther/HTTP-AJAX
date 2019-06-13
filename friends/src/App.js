import React from 'react';
// import axios from 'axios';

class Friends extends React.Component {

    render(){
        const { friend } = this.props;
        console.log(friend);
        return (
            //  friends.map(friend => {
            //      return (
                     <p>
                         Name: {friend.name}<br />
                         Age: {friend.age}<br />
                         Email: {friend.email}
                     </p>
            //      )
            //  })
        )

    }
}

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