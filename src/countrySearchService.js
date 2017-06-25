import countries from './countries';

const stripNonAlpha = input => input.replace(/[^a-z]/gi, '');

const startsWith = (country, term) => country.search(new RegExp(`^${term}`, 'i')) != -1;

const search = term => {
  const alphaTerm = stripNonAlpha(term);

  return alphaTerm && alphaTerm.length
  ? countries.filter(country => startsWith(stripNonAlpha(country), alphaTerm))
  : [];
};

export default { search };
