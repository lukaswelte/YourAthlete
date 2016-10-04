import React, { PureComponent } from 'react';
import { Link } from 'react-router'
import './NavigationItem.css';

class NavigationItem extends PureComponent {
  render() {
    const { children, to } = this.props;
    return (
      <div className="NavigationItem-container">
        <Link to={to} className="NavigationItem-link">{children}</Link>
      </div>
    );
  }
}

export default NavigationItem;
