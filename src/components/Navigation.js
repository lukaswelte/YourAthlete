import React, { PureComponent } from 'react';
import './Navigation.css';

import NavigationItem from './NavigationItem';

class Navigation extends PureComponent {
  render() {
    return (
      <div className="Navigation-container">
        <NavigationItem to="/">Home</NavigationItem>
        <NavigationItem to="idee">Die Idee</NavigationItem>
        <NavigationItem to="athleten">Athletenübersicht</NavigationItem>
      </div>
    );
  }
}

export default Navigation;
