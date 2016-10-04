import React, { PureComponent } from 'react';
import './Title.css';

class Title extends PureComponent {
  render() {
    const { children, style } = this.props;
    return (
      <h1 className="Title-text" style={style}>{children}</h1>
    );
  }
}

export default Title;
