import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeroImage from '../components/HeroImage';
import Title from '../components/Title';
import SectionTitle from '../components/SectionTitle';
import PageContent from '../components/PageContent';
import ReactMarkdown from 'react-markdown';
import { Bar as BarChart } from 'react-chartjs';
import './AthleteDetail.css';

class AthleteDetail extends Component {
  render() {
    const { athlete, donations, onDonate } = this.props;

    const supporters = donations.map((donation) => (<div key={donation.supporter}>{donation.supporter}</div>));

    const clickedDonate = () => {
      onDonate(athlete.name, 'Max Mustermann', 10, 2);
    };

    var monthlyMoney = [];
    for (var i = 1; i < 13; i++) {
      // eslint-disable-next-line
      monthlyMoney.push(donations.filter((donation) => i >= donation.startMonth && (i <= donation.startMonth + donation.durationInMonths - 1)).reduce(((cur, obj) => cur + obj.amount), 0));
    }

    const chartData = {
      labels: [
        "Januar", "Februar", "März", "April", "Mai",
        "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"
      ],
      datasets: [
          {
              data: monthlyMoney,
          }
      ]
    };

    return (
      <div>
        <HeroImage url={athlete.teaserImage}/>
        <PageContent>
          <Title>{athlete.name}</Title>
          <div className="AthleteDetail-twocolumn">
            <div className="AthleteDetail-motivation">
              <SectionTitle>Motivation</SectionTitle>
              <ReactMarkdown source={athlete.motivation} escapeHtml={true} />
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
              {supporters}
              <div style={{flex: 1}}>
                <BarChart data={chartData} options={{
                  elements: {rectangle: {backgroundColor: 'green'}}
                }} height={250} width={500} />
              </div>
            </div>
            <div className="AthleteDetail-bio">
              <SectionTitle>Unterstützen</SectionTitle>
              <div>Werde jetzt Unterstützer von {athlete.name}!</div>
              <div style={{marginTop: '2em'}}>
                Sebastian Brendel mit 10 Euro im Monat unterstützen für die Dauer von 2 Monaten
                < br/>
                <button onClick={clickedDonate}>Jetzt unterstützen</button>
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
    athlete: state.athletes.find((athlete) => athlete.name === ownProps.params.name),
    donations: state.donations.filter((donation) => donation.athlete === ownProps.params.name)
  }),
  (dispatch) => ({
    onDonate: (athlete, supporter, amount, duration) => {
      dispatch({
        type: 'DONATE',
        payload: {
          athlete: athlete,
          supporter: supporter,
          durationInMonths: duration,
          startMonth: new Date().getMonth() + 1,
          amount: amount
        }
      });
    }
  })
)(AthleteDetail);

export default AthleteDetailContainer;
