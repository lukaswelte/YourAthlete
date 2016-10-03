import React, { PureComponent } from 'react';
import './AthleteListItem.css';

class AthleteListItem extends PureComponent {
  render() {
    const { athlete, onClick } = this.props;

    const successItem = athlete.successes.map((success) => <div key={success}>{success}</div>);

    return (
      <div onClick={onClick} className="AthleteListItem-container">
        <div style={{backgroundImage: `url(${athlete.profilePhoto})`}} className="AthleteListItem-profilePhoto" />
        <div className="AthleteListItem-textContainer">
          <h1>{athlete.name}</h1>
          <div className="AthleteListItem-sport">{athlete.sport}</div>
          {successItem}
        </div>
      </div>
    );
  }
}

export default AthleteListItem;
