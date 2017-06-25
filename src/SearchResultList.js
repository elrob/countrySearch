import React from 'react';
import SearchResultListItem from './SearchResultListItem';

const SearchResultList = ({ results, onSearchResultSelect }) => {
  return results && results.length
  ? (
    <ul>
      {results.slice(0,5).map(result =>
        <SearchResultListItem
          key={result}
          result={result}
          onSearchResultSelect={onSearchResultSelect}
        />)}
    </ul>
  )
  : null;
};

export default SearchResultList;
