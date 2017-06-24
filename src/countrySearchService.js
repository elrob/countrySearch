export default class CountrySearchService {
  constructor(countries) {
    this.countries = countries;
  }

  search(term) {
    return this.countries.filter(country => country === term);
  }
}
