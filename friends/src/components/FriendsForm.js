import React from 'react';

function FriendsForm ({ handleTextInput, saveFriendData }) {
    return (
        <form>
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

</form>

    )
}

export default FriendsForm;