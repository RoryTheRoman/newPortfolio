import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemCard from './components/ItemCard';
import FeatureItem from './components/FeatureItem';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Works from './pages/Works/Works.js';
import About from './pages/About/About.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Works} />
            <Route exact path="/Works" component={Works} />
            <Route exact path="/About" component={About}
/>          </Switch>
        </div>
      </Router>

    )
  }
}

export default App;

{/* <div className="App">
  <Navbar />
  <ItemCard />
  <FeatureItem />
</div> */}