import React, { PureComponent } from 'react';
import Title from '../components/Title';
import PageContent from '../components/PageContent';
import './NotFound.css';

class NotFound extends PureComponent {
  render() {
    return (
      <div className="NotFound-container">
        <PageContent>
          <Title>Nichts gefunden</Title>
          <div>Die Seite konnte leider nicht gefunden werden</div>
        </PageContent>
      </div>
    );
  }
}

export default NotFound;
