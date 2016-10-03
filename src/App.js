import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Navigation />
        {children}
      </div>
    );
  }
}

export default App;
