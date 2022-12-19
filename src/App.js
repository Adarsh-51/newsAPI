import './App.css';
import Navbar from './Navbar';


import React, { Component } from 'react'
import News from './News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <News></News>
      </div>
    )
  }
}
