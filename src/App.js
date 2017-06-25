import React, { Component } from 'react';
import countrySearchService from './countrySearchService';
import CountryDetail from './CountryDetail';
import SearchBox from './SearchBox';
import SearchResultList from './SearchResultList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countrySearchResults: [],
      selectedCountry: null
    };
  }

  countrySearch(term) {
    const results = countrySearchService.search(term);
    this.setState({ countrySearchResults: results });
  };

  render() {
    return (
      <div>
        <SearchBox onSearchTermChange={term => this.countrySearch(term)} />
        <SearchResultList
          results={this.state.countrySearchResults}
          onSearchResultSelect={selectedCountry => this.setState({selectedCountry})}
        />
        <CountryDetail country={this.state.selectedCountry} />
      </div>
    );
  }
}
