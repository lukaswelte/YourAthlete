import React, { PureComponent } from 'react';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <div className="Footer-container">
        <div className="Footer-item">Impressum</div>
        <div className="Footer-item">Datenschutz</div>
        <div className="Footer-item">Die Idee</div>
        <div className="Footer-item">Partner</div>
      </div>
    );
  }
}

export default Footer;
