import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
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

  it('should not include search results when there are none', function() {
    const searchResults = [];
    const wrapper = shallow(<SearchResultList results={searchResults} />);

    expect(wrapper.find('ul')).to.have.length(0);
    expect(wrapper.find('SearchResultListItem')).to.have.length(0);
  });
});
