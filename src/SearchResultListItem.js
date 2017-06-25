import React from 'react';
import { MenuItem } from 'react-bootstrap';

const SearchResultListItem = ({ result, onSearchResultSelect, active }) =>
  <MenuItem active={active} onClick={() => onSearchResultSelect(result)}>{result}</MenuItem>;

export default SearchResultListItem;
