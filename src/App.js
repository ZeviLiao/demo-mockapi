
import React, { Component } from 'react'
import './App.scss';
import axios from 'axios';

const API = 'https://jsonplaceholder.typicode.com/comments/';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listData: []
    }
  }

  mockData = () => {
    // axios.get(API)
    //   .then(result => this.setState({
    //     listData: result.data,
    //     isLoading: false
    //   }))
    //   .catch(error => this.setState({
    //     error,
    //     isLoading: false
    //   }));
  }

  urlData = () => {
    axios.get(API)
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
          this.state.listData.filter(o => o.id < 10).map(o => <li key="id"> {o.name} </li>)
        }
        </ul>  
      </div>
    )
  }
}
