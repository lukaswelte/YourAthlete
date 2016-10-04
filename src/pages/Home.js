import React, { PureComponent } from 'react';
import HeroImage from '../components/HeroImage';
import Title from '../components/Title';
import PageContent from '../components/PageContent';
import Section from '../components/Section';
import Testimonial from '../components/Testimonial';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <HeroImage url="https://www.pointer.de/bilder/teaser_top/5965beachvolleyball_olympia.jpg" />
        <PageContent>
          <Title>Your Athlete</Title>
          <Section>
            <div>
              Mit Your Athlete <b>unterstützt du deinen Sportler</b> regelmäßig mit etwas Geld.
              So ermöglichst du ihm die <b>volle Konzentration auf seinen Erfolg</b>.
              Im Gegenzug erhältst du einen <b>direkten Draht zu deinen Sportlern</b> und wirst mit Fotos und Videos auf dem Laufenden gehalten.<br /><br />

              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br /><br />

              Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. <br /><br />
            </div>
          </Section>
          <Section>
            <Testimonial
              title="Was der Athlet sagt:"
              photoURL="http://www.dsv.de/typo3temp/pics/Schwimmen_Vogel_Florian_2016_2b254d144f.jpg"
              name="Florian Vogel"
              description="Olympionike über 400m Freistil"
              quoteBackgroundURL="https://hd.unsplash.com/photo-1438029071396-1e831a7fa6d8">
              Durch YourAthlets erhalten wir Leistungssportler in Deutschland ganz neue Möglichkeiten.<br />
              Die Förderung erlaubt mir die volle Konzentration auf das Schwimmen zu legen und mir bleibt ausreichend Zeit mich durch mein Studium auf das Leben nach dem aktiven Schwimmen vorzubereiten
            </Testimonial>
          </Section>
          <Section>
            <Testimonial
              title="Was der Supporter sagt:"
              photoURL="https://pbs.twimg.com/profile_images/592027821842784259/jv9jt5EV.jpg"
              name="Alexander Wienke"
              description="Wasserratte aus Passau"
              quoteBackgroundURL="http://www.abacho.de/wp-content/uploads/Passau.jpg"
              photoOnRight={true}>
              Früher bin ich selbst bei den Bayrischen Landesmeisterschaften geschwommen. Zu Olympia hat es leider nie gereicht. Das ich jetzt Florian Vogel auf seinem Weg nach Tokio unterstützen kann ist mir eine Herzensangelegenheit, da ich viel Potenzial in Ihm sehe. Mit YourAthlete ist es so einfach wie nie den Sport zu unterstützen. Besonders gefreut hat mich, als Florian mich zu sich ins die Schwimmhalle eingeladen hat und ich in live sehen konnte.
            </Testimonial>
          </Section>
        </PageContent>
      </div>
    );
  }
}

export default Home;
