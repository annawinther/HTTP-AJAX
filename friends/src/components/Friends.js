import React from 'react';

export default class Friends extends React.Component {
    state = {
        friend: null,
        errorMessage: '',
        spinner: false
    }

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