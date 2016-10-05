import React, { PureComponent } from 'react';
import './SectionTitle.css';

class SectionTitle extends PureComponent {
  render() {
    const { children, style } = this.props;
    return (
      <h2 className="SectionTitle-text" style={style}>{children}</h2>
    );
  }
}

export default SectionTitle;
