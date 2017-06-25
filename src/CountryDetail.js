import React  from 'react';

const CountryDetail = ({ country, flagUrl }) => {
  return country
  ? (
    <div style={{textAlign: 'center'}}>
      <h4>{country}</h4>
      {flagUrl ? <img src={flagUrl} style={{maxWidth: '50%'}} /> : null}
    </div>
  )
  : null;
}

export default CountryDetail;
