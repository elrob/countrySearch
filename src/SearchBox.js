import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

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
