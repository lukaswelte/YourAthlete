import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeroImage from '../components/HeroImage';

class AthleteDetail extends Component {
  render() {
    const { athlete } = this.props;

    return (
      <div>
        <HeroImage url={athlete.teaserImage}/>
        <h1>{athlete.name}</h1>
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
