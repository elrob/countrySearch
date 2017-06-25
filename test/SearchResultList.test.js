import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SearchResultList from '../src/SearchResultList';

describe('<SearchResults />', function () {
  it('should include search results', function() {
    const searchResults = ['aaa', 'bbb'];
    const wrapper = shallow(<SearchResultList results={searchResults} />);

    expect(wrapper.find('ul')).to.have.length(1);

    const displayedResults = wrapper.find('SearchResultListItem');
    expect(displayedResults).to.have.length(2);
    expect(displayedResults.at(0).props().result).to.equal(searchResults[0]);
    expect(displayedResults.at(1).props().result).to.equal(searchResults[1]);
  });

  it('should only display max displayed search results', function() {
    const searchResults = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff'];
    const wrapper = shallow(<SearchResultList results={searchResults} maxDisplayedSearchResults={5} />);

    expect(wrapper.find('ul')).to.have.length(1);

    const displayedResults = wrapper.find('SearchResultListItem');
    expect(displayedResults).to.have.length(5);
    expect(displayedResults.at(0).props().result).to.equal(searchResults[0]);
    expect(displayedResults.at(4).props().result).to.equal(searchResults[4]);
  });

  it('should not include search results when there are none', function() {
    const searchResults = [];
    const wrapper = shallow(<SearchResultList results={searchResults} />);

    expect(wrapper.find('ul')).to.have.length(0);
    expect(wrapper.find('SearchResultListItem')).to.have.length(0);
  });

  it('should focus the active search result', function() {
    const searchResults = ['aaa', 'bbb', 'ccc'];
    const wrapper = shallow(<SearchResultList results={searchResults} activeSearchResultIndex={1} />);

    const displayedResults = wrapper.find('SearchResultListItem');
    expect(displayedResults.at(0).props().active).to.equal(false);
    expect(displayedResults.at(1).props().active).to.equal(true);
    expect(displayedResults.at(2).props().active).to.equal(false);
  });
});
