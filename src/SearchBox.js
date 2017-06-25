import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import SearchNavigationKeyCodes from './searchNavigationKeyCodes';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <FormControl
        type='text'
        value={this.state.term}
        placeholder='Search for a country'
        onChange={event => this.onInputChange(event.target.value)}
        onKeyDown={event => {
          const { upArrow, downArrow, enter } = SearchNavigationKeyCodes;
          if (event.keyCode === upArrow || event.keyCode === downArrow || event.keyCode === enter) {
            event.preventDefault();
          }
          this.props.onKeyDown(event.keyCode)
        }}
        autoFocus
      />
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBox;
