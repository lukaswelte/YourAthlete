import React, { PureComponent } from 'react';
import './PageContent.css';

class PageContent extends PureComponent {
  render() {
    const { children, style } = this.props;

    return (
      <div className="PageContent-container" style={style}>
        {children}
      </div>
    );
  }
}

export default PageContent;
