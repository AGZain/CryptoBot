import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import Body from './Body';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <div className="container">
         <Body />
       </div>
      </div>
    );
  }
}

export default App;
