import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import countryList from './countryList';
import SearchBox from './SearchBox';

class App extends Component {
  countrySearch(term) {
    console.log(term);
  }

  render() {
    return <SearchBox onSearchTermChange={this.countrySearch} />;
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
