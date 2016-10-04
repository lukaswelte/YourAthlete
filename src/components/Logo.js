import React, { PureComponent } from 'react';
import './Logo.css';

class Logo extends PureComponent {
  render() {
    const { style } = this.props;

    return (
      <div className="Logo-content" style={style}>YourAthlete</div>
    );
  }
}

export default Logo;
