import React from 'react';
import { Clearfix } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import SearchResultListItem from './SearchResultListItem';

const SearchResultList = ({
  results,
  onSearchResultSelect,
  activeSearchResultIndex,
  maxDisplayedSearchResults
}) => {
  return results && results.length
  ? (
    <Clearfix>
    <div className='dropdown'>
      <ul className='dropdown-menu show'>
        {results.slice(0,maxDisplayedSearchResults).map((result,index) =>
          <SearchResultListItem
            key={result}
            result={result}
            active={index === activeSearchResultIndex}
            onSearchResultSelect={onSearchResultSelect}
          />)}
      </ul>
    </div>
    </Clearfix>
  )
  : null;
};

export default SearchResultList;
