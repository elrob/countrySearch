import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import countrySearchService from './countrySearchService';
import CountryDetail from './CountryDetail';
import SearchBox from './SearchBox';
import SearchResultList from './SearchResultList';

const MAX_DISPLAYED_SEARCH_RESULTS = 5;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countrySearchResults: [],
      activeCountrySearchResultIndex: 0,
      selectedCountry: null
    };
  }

  countrySearch(term) {
    const results = countrySearchService.search(term);
    this.setState({ countrySearchResults: results, activeCountrySearchResultIndex: 0 });
  };

  onSearchBoxDownArrowPress() {
    const activeCountrySearchResultIndex = Math.min(
      this.state.activeCountrySearchResultIndex + 1,
      this.state.countrySearchResults.length - 1,
      MAX_DISPLAYED_SEARCH_RESULTS - 1
    );
    console.log('test', activeCountrySearchResultIndex);
    this.setState({activeCountrySearchResultIndex});
  }

  onSearchBoxUpArrowPress() {
    const activeCountrySearchResultIndex = Math.max(
      0,
      this.state.activeCountrySearchResultIndex - 1
    );
    console.log('test', activeCountrySearchResultIndex);
    this.setState({activeCountrySearchResultIndex});
  }

  onSearchBoxEnterKeyPress() {
    if (this.state.countrySearchResults.length) {
      this.setState({
        selectedCountry: this.state.countrySearchResults[this.state.activeCountrySearchResultIndex],
        activeCountrySearchResultIndex: 0,
        countrySearchResults: []
      });
    }
  }

  onSearchBoxKeyDown(keyCode) {
    const UP_ARROW = 38;
    const DOWN_ARROW = 40;
    const ENTER = 13;

    switch(keyCode) {
      case UP_ARROW:
        this.onSearchBoxUpArrowPress();
        break;
      case DOWN_ARROW:
        this.onSearchBoxDownArrowPress();
        break;
      case ENTER:
        this.onSearchBoxEnterKeyPress()
        break;
    }
  };

  render() {
    return (
      <Grid>
        <h1>Country Search</h1>
        <Row>
          <Col md={6}>
            <SearchBox
              onSearchTermChange={term => this.countrySearch(term)}
              onKeyDown={keyCode => this.onSearchBoxKeyDown(keyCode)}
            />
            <SearchResultList
              activeSearchResultIndex={this.state.activeCountrySearchResultIndex}
              results={this.state.countrySearchResults}
              maxDisplayedSearchResults={MAX_DISPLAYED_SEARCH_RESULTS}
              onSearchResultSelect={selectedCountry =>
                this.setState({countrySearchResults: [], selectedCountry})}
            />
          </Col>
          <Col md={6}>
            <CountryDetail country={this.state.selectedCountry} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
