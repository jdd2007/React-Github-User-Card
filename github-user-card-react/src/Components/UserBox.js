import React, { Component } from 'react';
import axios from 'axios';

const divStyle = {
    height: '400px',
    width: '400px',
    textAlign: 'center',
    margin: 'auto',
    border: '2px solid black',
    marginTop: '50px',
    marginBottom: '50px',
  };

export default class UserBox extends Component {
    constructor() {
        super();
        this.state={
            mydata: {}
        }
    }

    componentDidMount() {
        axios
            .get(`https://api.github.com/users/jdd2007`)
            .then(res => {
                this.setState({
                    mydata: res.data  
                });
                console.log(res.data);
            })
            .catch(err => console.log(err, 'Data not found'));
    }

    render() {
        return (
            <div>
                    <div style={divStyle}>
                        <h2>{this.state.mydata.name}</h2>
                        <h3>{this.state.mydata.login}</h3>
                        <p>Github Url: <a href={this.state.mydata.url}>{this.state.mydata.html_url}</a></p>
                        <p>Followers: {this.state.mydata.followers}</p>
                        <p>Following: {this.state.mydata.following}</p> 
                    </div>
            </div>
        )
    }
}