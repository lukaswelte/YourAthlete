import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import HeroImage from '../components/HeroImage';
import Title from '../components/Title';
import PageContent from '../components/PageContent';
import AthleteListItem from '../components/AthleteListItem';
import './AthleteOverview.css';

import AthleteDetailHeroImage from './AthleteDetailHeroImage.jpg';

class AthleteOverview extends Component {
  render() {
    const { athletes, gotoAthlete } = this.props;

    const sports = [...new Set(athletes.map((athlete) => athlete.sport))];

    const sportsItems = sports.map(sport => <div key={sport}>{sport}</div>);
    const athleteListItems = athletes.map((athlete) => <AthleteListItem key={athlete.name} athlete={athlete} onClick={() => gotoAthlete(athlete)} />);

    return (
      <div>
        <HeroImage url={AthleteDetailHeroImage}/>
        <PageContent>
          <Title>Sportarten</Title>
          <div className="AthleteOverview-content">
            <div className="AthleteOverview-sports">
              {sportsItems}
            </div>
            <div className="AthleteOverview-athletes">
              {athleteListItems}
            </div>
          </div>
        </PageContent>
      </div>
    );
  }
}

const AthleteOverviewContainer = connect(
  (state) => ({
    athletes: state.athletes
  }),
  (dispatch) => ({
    gotoAthlete: (athlete) => {
      dispatch(push(`athlet/${athlete.name}`));
    }
  })
)(AthleteOverview)

export default AthleteOverviewContainer;
