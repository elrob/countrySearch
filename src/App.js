import React, { Component } from 'react';
import countrySearchService from './countrySearchService';
import SearchBox from './SearchBox';
import SearchResultList from './SearchResultList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { countrySearchResults: [] };
  }

  countrySearch(term) {
    const results = countrySearchService.search(term);
    this.setState({ countrySearchResults: results });
  };

  render() {
    return (
      <div>
        <SearchBox onSearchTermChange={term => this.countrySearch(term)} />
        <SearchResultList results={this.state.countrySearchResults} />
      </div>
    );
  }
}
