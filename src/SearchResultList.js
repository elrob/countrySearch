import React from 'react';
import SearchResultListItem from './SearchResultListItem';

const SearchResultList = ({ results }) => {
  return results && results.length
  ? (
    <ul>
      {results.map(result => <SearchResultListItem key={result} result={result} />)}
    </ul>
  )
  : null;
};

export default SearchResultList;
