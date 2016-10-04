import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Navigation />
        {children}
        <Footer />
      </div>
    );
  }
}

export default App;
