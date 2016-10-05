import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeroImage from '../components/HeroImage';
import Title from '../components/Title';
import SectionTitle from '../components/SectionTitle';
import PageContent from '../components/PageContent';
import './AthleteDetail.css';

class AthleteDetail extends Component {
  render() {
    const { athlete } = this.props;

    return (
      <div>
        <HeroImage url={athlete.teaserImage}/>
        <PageContent>
          <Title>{athlete.name}</Title>
          <div className="AthleteDetail-twocolumn">
            <div className="AthleteDetail-motivation">
              <SectionTitle>Motivation</SectionTitle>
              {athlete.motivation}
            </div>
            <div className="AthleteDetail-bio">
              <SectionTitle>Steckbrief</SectionTitle>
              <div><b>Geburtsdatum:</b> {athlete.birthday}</div>
              <div><b>Geburtsort:</b> {athlete.birthplace}</div>
              <div><b>Größe:</b> {athlete.size}</div>
              <div><b>Gewicht:</b> {athlete.weight}</div>
              <div><b>Job:</b> {athlete.job}</div>
            </div>
          </div>
          <div className="AthleteDetail-twocolumn">
            <div className="AthleteDetail-motivation">
              <SectionTitle>Supporters</SectionTitle>
              Foobar doobar
            </div>
            <div className="AthleteDetail-bio">
              <SectionTitle>Unterstützen</SectionTitle>
              <div>Werde jetzt Unterstützer von {athlete.name}!</div>
              <div style={{marginTop: '2em'}}>
                Sebastian Brendel mit 5 Euro im Monat unterstützen für die Dauer von
              </div>
            </div>
          </div>
        </PageContent>
      </div>
    );
  }
}

const AthleteDetailContainer = connect(
  (state, ownProps) => ({
    athlete: state.athletes.find((athlete) => athlete.name === ownProps.params.name)
  })
)(AthleteDetail);

export default AthleteDetailContainer;
