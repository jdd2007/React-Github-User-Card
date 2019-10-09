import React, { Component } from 'react'
import axios from 'axios';

const divStyle2 = {
    width: '1000px',
    textAlign: 'center',
    margin: 'auto',
    border: '2px solid black',
    marginTop: '50px',
    marginBottom: '50px',
  };


export default class MyFollowers extends Component {
    constructor() {
        super();
        this.state={
            followerdata: []
        }
    }

    componentDidMount() {
        axios
            .get(`https://api.github.com/users/jdd2007/followers`)
            .then(res => {
                this.setState({
                    followerdata: res.data  
                });
                console.log(res.data);
            })
            .catch(err => console.log(err, 'Data not found'));
    }
    render() {
        return (
            <div style={divStyle2}>
                <h1>My Followers</h1>
                <div className='followers-container'>
                {this.state.followerdata.map (follower => (
                    <div className='cards' key={follower.id}>
                        <img src={follower.avatar_url} />
                        <h2>{follower.login}</h2>
                        <p>Github Url: <a href={follower.url}>{follower.html_url}</a></p>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}
