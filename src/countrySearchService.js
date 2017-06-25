import countries from './countries';

const search = term => countries.filter(country => country.startsWith(term));

export default { search };
