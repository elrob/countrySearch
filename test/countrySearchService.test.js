import { expect } from 'chai';
import CountrySearchService from '../src/countrySearchService';

describe('countrySearchService - search', function () {
  const testCountries = [ 'Japan', 'United Kingdom', 'Zimbabwe'];

  testCountries.forEach(term => {
    it(`should return exact match for ${term} as a single item in array`, function () {
      const countrySearchService = new CountrySearchService(testCountries);
      const result = countrySearchService.search(term);
      expect(result).to.eql([term]);
    });
  });

  it('should return empty array when no matches', function () {
    const countrySearchService = new CountrySearchService(testCountries);
    const result = countrySearchService.search('not a country');
    expect(result).to.be.empty;
  });
});
