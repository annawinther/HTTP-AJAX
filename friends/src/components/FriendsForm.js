import React from 'react';
import styled from 'styled-components';


const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 20px;;
`;
function FriendsForm ({ handleTextInput, saveFriendData }) {
    return (
        <StyledForm>
        <input
            type="text"
            onChange={handleTextInput}
            placeholder="Name"
            name="name"
            // value={this.state.name}
        />
        <input
            type="text"
            onChange={handleTextInput}
            placeholder="Age"
            name="age"
            // value={this.state.age}
        />
        <input
            type="text"
            onChange={handleTextInput}
            placeholder="Email"
            name="email"
            // value={this.state.email}
        />
    <button onClick={saveFriendData}>Add Friend</button>

</StyledForm>

    )
}

export default FriendsForm;