import React, { PureComponent } from 'react';
import './Navigation.css';

import NavigationItem from './NavigationItem';
import Logo from './Logo';

class Navigation extends PureComponent {
  render() {
    return (
      <div className="Navigation-container">
        <Logo style={{marginRight: '100px'}} />
        <div className="Navigation-itemsContainer">
          <NavigationItem to="/">Home</NavigationItem>
          <NavigationItem to="idee">Die Idee</NavigationItem>
          <NavigationItem to="athleten">Athletenübersicht</NavigationItem>
          <NavigationItem to="werde-athlet">Werde ein Athlet</NavigationItem>
          <NavigationItem to="logout">Logout</NavigationItem>
        </div>
      </div>
    );
  }
}

export default Navigation;
