import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeroImage from '../components/HeroImage';
import Title from '../components/Title';
import PageContent from '../components/PageContent';

class AthleteDetail extends Component {
  render() {
    const { athlete } = this.props;

    return (
      <div>
        <HeroImage url={athlete.teaserImage}/>
        <PageContent>
          <Title>{athlete.name}</Title>
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
