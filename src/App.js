
import React, { Component } from 'react'
import './App.css';
// import axios from 'axios';
// fake api
import MockAdapter from 'axios-mock-adapter'
import {axios} from './mock/comments'


const API = 'https://jsonplaceholder.typicode.com/comments';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listData: []
    }
  }

  mockData = async (uid) => { // await
    try {
      let rsp = await axios.get(API + '/fake')
      this.setState({
        listData: rsp.data,
      })
    } catch (err) {
      console.log(err)
    }
  }

  urlData = () => {
    axios.get(API) // external data
      .then(result => this.setState({
        listData: result.data,
      }))
      .catch(error =>
        console.log(error)
      );
  }

  render() {
    return (
      <div className="App" >
        <button onClick={this.mockData}>  hijacked by mocker </button>
        <button onClick={this.urlData}>  fecth data from extranal url </button>
<ul>
        {
          this.state.listData.filter(o => o.id < 10).map(o => <li key={o.id}> {o.name} </li>)
        }
        </ul>        
      </div>
    )
  }
}
