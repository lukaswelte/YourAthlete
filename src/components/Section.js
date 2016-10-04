import React, { PureComponent } from 'react';
import './Section.css';

class Section extends PureComponent {
  render() {
    const { children, style, backgroundImageURL } = this.props;

    const styles = {
      backgroundImage: `url(${backgroundImageURL})`,
      ...style
    };

    return (
      <div className="Section-container" style={styles}>
        {children}
      </div>
    );
  }
}

export default Section;
