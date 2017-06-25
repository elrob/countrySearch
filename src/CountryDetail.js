import React  from 'react';

const CountryDetail = ({ country }) => {
  return country ? <h4>{country}</h4> : null;
}

export default CountryDetail;
