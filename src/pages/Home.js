import React, { PureComponent } from 'react';
import HeroImage from '../components/HeroImage';
import Title from '../components/Title';
import Section from '../components/Section';
import Testimonial from '../components/Testimonial';
import CircularImage from '../components/CircularImage';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <HeroImage url="https://www.pointer.de/bilder/teaser_top/5965beachvolleyball_olympia.jpg">
          <Title style={{color: 'white'}}>Your Athlete</Title>
        </HeroImage>
        <Section>
          <Testimonial
            title="Was der Athlet sagt:"
            photoURL="http://www.dsv.de/typo3temp/pics/Schwimmen_Vogel_Florian_2016_2b254d144f.jpg"
            name="Florian Vogel"
            description="Olympionike in Rio über 400m Freistil"
            quoteBackgroundURL="https://hd.unsplash.com/photo-1438029071396-1e831a7fa6d8">
            Durch YourAthlets erhalten wir Leistungssportler in Deutschland ganz neue Möglichkeiten.<br />
            Die Förderung erlaubt mir die volle Konzentration auf das Schwimmen zu legen und mir bleibt ausreichend Zeit mich durch mein Studium auf das Leben nach dem aktiven Schwimmen vorzubereiten
          </Testimonial>
        </Section>
      </div>
    );
  }
}

export default Home;
