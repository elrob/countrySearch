import React  from 'react';

const CountryDetail = ({ country }) => {
  return country ? <div>{country}</div> : null;
}

export default CountryDetail;
