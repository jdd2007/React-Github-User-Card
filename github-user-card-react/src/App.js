import React, { Component } from 'react';
import './App.css';
import UserBox from './Components/UserBox';
import axios from 'axios';
import MyFollowers from './Components/MyFollowers';

class App extends Component {
  constructor() {
    super()

    this.state = {
      username: 'jdd2007',
      gitUser: {},
      followers: [] ,
      inputValue: ''
    }
  }

  getUser = () => {
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then((res) => {
        this.setState({
          gitUser: res.data
        })
      })
      .catch((error) => {
        console.log(error)
      })

    axios.get(`https://api.github.com/users/${this.state.username}/followers`)
      .then((res) => {
        this.setState({
          followers: res.data
        })
      })
  }

  componentDidMount() {
    this.getUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.username !== this.state.username) {
      this.getUser();
    } else {
      return
    }
  }

  render() {
    return (
      <div>
        <UserBox {...this.state.gitUser} />
        <MyFollowers />
      </div>
    )
  }
}

export default App;