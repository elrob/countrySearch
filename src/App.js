import React, { Component } from 'react';
import countries from './countries';
import SearchBox from './SearchBox';

export default class App extends Component {
  countrySearch(term) {
    console.log(term);
  }

  render() {
    return <SearchBox onSearchTermChange={this.countrySearch} />;
  }
}
