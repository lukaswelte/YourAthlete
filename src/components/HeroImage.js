import React, { PureComponent } from 'react';
import './HeroImage.css';

class HeroImage extends PureComponent {
  render() {
    const { children, url } = this.props;
    return (
      <div className="HeroImage-container" style={{backgroundImage: `url(${url})`}}>
        {children}
      </div>
    );
  }
}

export default HeroImage;
