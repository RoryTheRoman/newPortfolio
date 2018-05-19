import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemCard from './components/ItemCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ItemCard />
      </div>

    )
  }
}

export default App;
