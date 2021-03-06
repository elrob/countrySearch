import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import countrySearchService from './countrySearchService';
import CountryDetail from './CountryDetail';
import SearchBox from './SearchBox';
import SearchResultList from './SearchResultList';
import SearchNavigationKeyCodes from './searchNavigationKeyCodes';

const MAX_DISPLAYED_SEARCH_RESULTS = 5;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countrySearchResults: [],
      activeCountrySearchResultIndex: 0,
      selectedCountry: null,
      selectedCountryFlagUrl: null
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

  onCountrySelect(country) {
    this.setState({
      selectedCountry: country,
      activeCountrySearchResultIndex: 0,
      countrySearchResults: [],
      selectedCountryFlagUrl: null
    });

    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then(res => res.json())
      .then(json => {
        if (json && json.length) {
          this.setState({ selectedCountryFlagUrl: json[0].flag });
        }
      });
  }

  onSearchBoxEnterKeyPress() {
    if (this.state.countrySearchResults.length) {
      this.onCountrySelect(this.state.countrySearchResults[this.state.activeCountrySearchResultIndex]);
    }
  }

  onSearchBoxKeyDown(keyCode) {
    const { upArrow, downArrow, enter } = SearchNavigationKeyCodes;

    switch(keyCode) {
      case upArrow:
        this.onSearchBoxUpArrowPress();
        break;
      case downArrow:
        this.onSearchBoxDownArrowPress();
        break;
      case enter:
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
              onSearchResultSelect={selectedCountry => this.onCountrySelect(selectedCountry)}
            />
          </Col>
          <Col md={6}>
            <CountryDetail
              country={this.state.selectedCountry}
              flagUrl={this.state.selectedCountryFlagUrl}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}
