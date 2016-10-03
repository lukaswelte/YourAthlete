import React, { PureComponent } from 'react';
import HeroImage from '../components/HeroImage';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <HeroImage url="https://www.pointer.de/bilder/teaser_top/5965beachvolleyball_olympia.jpg"/>
        Welcome Home!
      </div>
    );
  }
}

export default Home;
