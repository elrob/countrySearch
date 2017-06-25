import React  from 'react';

const SearchResultListItem = ({ result, onSearchResultSelect }) =>
  <li onClick={() => onSearchResultSelect(result)}>{result}</li>;

export default SearchResultListItem;
