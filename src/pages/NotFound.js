import React, { PureComponent } from 'react';
import Title from '../components/Title';
import './NotFound.css';

class NotFound extends PureComponent {
  render() {
    return (
      <div className="NotFound-container">
        <Title>Nichts gefunden</Title>
        <div>Die Seite konnte leider nicht gefunden werden</div>
      </div>
    );
  }
}

export default NotFound;
