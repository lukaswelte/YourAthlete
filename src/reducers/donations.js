import DonationData from '../../donations.json';

const donations = (state = DonationData, action) => {
  switch (action.type) {
    case 'DONATE':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default donations;
