import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeContainer from "./Containers/HomeContainer"
import HeaderContainer from './Containers/HeaderContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderContainer/>
          <HomeContainer/>
      </div>
    );
  }
}

export default App;
