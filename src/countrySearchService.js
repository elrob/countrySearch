import countries from './countries';

const search = term => countries.filter(country => country === term);

export default { search };
