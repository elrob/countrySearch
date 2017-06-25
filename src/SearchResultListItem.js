import React from 'react';
import { MenuItem } from 'react-bootstrap';

const SearchResultListItem = ({ result, onSearchResultSelect }) =>
  <MenuItem onSelect={() => onSearchResultSelect(result)}>{result}</MenuItem>;

export default SearchResultListItem;
