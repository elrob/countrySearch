import countries from './countries';

const search = term => countries.filter(country => country.search(new RegExp(`^${term}`, 'i')) != -1);

export default { search };
