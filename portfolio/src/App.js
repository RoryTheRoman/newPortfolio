import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Works from './pages/Works/Works.js';
import About from './pages/About/About.js';
import FeaturedWorks from './pages/FeaturedWorks/FeaturedWorks.js';
import Footer from './components/Footer';
import Contact from './pages/Contact/Contact.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Works} />
            <Route exact path="/Works" component={Works} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Works/:id" component={FeaturedWorks} />
/>          </Switch>
          <Footer />
        </div>
      </Router>

    )
  }
}

export default App;

