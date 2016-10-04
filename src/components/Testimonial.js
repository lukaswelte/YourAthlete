import React, { PureComponent } from 'react';
import CircularImage from './CircularImage';
import Title from './Title';
import './Testimonial.css';

class Testimonial extends PureComponent {
  render() {
    const { imageOnRight, children, quoteBackgroundURL, photoURL, name, description, title } = this.props;

    return (
      <div className="Testimonial-container">
        <div className="Testimonial-title">
          {title}
        </div>
        <div className="Testimonial-content">
          <div className="Testimonial-photoContainer" style={{backgroundImage: `url(${photoURL})`}}>
            <div className="Testimonial-photoDescriptionContainer">
              <div><b>{name}</b></div>
              <div>{description}</div>
            </div>
          </div>
          <div className="Testimonial-quoteContainer" style={{backgroundImage: `url(${quoteBackgroundURL})`}}>
            <div className="Testimonial-quoteContent">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
