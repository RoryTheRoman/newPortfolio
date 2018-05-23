import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemCard from './components/ItemCard';
import FeatureItem from './components/FeatureItem';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ItemCard />
        <FeatureItem />
      </div>

    )
  }
}

export default App;
