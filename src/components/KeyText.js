import React, { PureComponent } from 'react';
import './KeyText.css';

class KeyText extends PureComponent {
  render() {
    const { children, style } = this.props;
    return (
      <div className="KeyText-text" style={style}>{children}</div>
    );
  }
}

export default KeyText;
