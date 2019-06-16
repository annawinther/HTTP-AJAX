import React from 'react';
import styled from 'styled-components';

const StyledFriendsList = styled.div`
    border: 1px solid black;
    margin-top: 20px;
    margin-left: 25%;
    width: 50%;
    display: flex;
    flex-direction: column;
`;


class Friends extends React.Component {

    render(){
        const { friends, deleteFriend } = this.props;
        console.table(friends);
        return (
             friends.map(friend => {
                 return (
                <StyledFriendsList key={friend.id}>
                    <h3>Name: {friend.name}</h3>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                    <button onClick={() => deleteFriend(friend.id)}>X</button>
                </StyledFriendsList>    
                 )
             })
        )

     }
}

export default Friends;