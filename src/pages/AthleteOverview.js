import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeroImage from '../components/HeroImage';
import AthleteListItem from '../components/AthleteListItem';
import './AthleteOverview.css';

class AthleteOverview extends Component {
  render() {
    const { athletes } = this.props;

    const sports = [...new Set(athletes.map((athlete) => athlete.sport))];

    const sportsItems = sports.map(sport => <div key={sport}>{sport}</div>);
    const athleteListItems = athletes.map((athlete) => <AthleteListItem key={athlete.name} athlete={athlete} />);

    return (
      <div>
        <HeroImage url="http://bc01.rp-online.de/polopoly_fs/flag-bearer-maria-hoefl-riesch-r-1.4019288.1391792359!httpImage/582718106.jpg_gen/derivatives/dx510/582718106.jpg"/>
        <h1>Sportarten</h1>
        <div className="AthleteOverview-content">
          <div className="AthleteOverview-sports">
            {sportsItems}
          </div>
          <div className="AthleteOverview-athletes">
            {athleteListItems}
          </div>
        </div>
      </div>
    );
  }
}

const AthleteOverviewContainer = connect(
  (state) => ({
    athletes: state.athletes
  })
)(AthleteOverview)

export default AthleteOverviewContainer;
