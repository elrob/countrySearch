import { expect } from 'chai';
import countrySearchService from '../src/countrySearchService';
const { search } = countrySearchService;

describe('countrySearchService - search', function () {
  const testCountries = [ 'Japan', 'United Kingdom', 'Zimbabwe'];

  testCountries.forEach(term => {
    it(`should return exact match for ${term} as a single item in array`, function () {
      expect(search(term)).to.eql([term]);
    });
  });

  it('should return empty array when no matches', function () {
    expect(search('not a country')).to.be.empty;
  });

  it('should match multiple by prefix', function() {
    expect(search('United')).to.eql(['United Arab Emirates', 'United Kingdom', 'United States']);
  });
});
