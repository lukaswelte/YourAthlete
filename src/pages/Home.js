import React, { PureComponent } from 'react';
import HeroImage from '../components/HeroImage';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <HeroImage url="https://dummyimage.com/1024x768/000/fff"/>
        Welcome Home!
      </div>
    );
  }
}

export default Home;
