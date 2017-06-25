import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import App from '../src/App';

describe('<App />', function () {
  it('should include a SearchBox', function() {
    const wrapper = shallow(<App />);
    expect(wrapper.find('SearchBox')).to.have.length(1);
  });

  it('should include SearchResultList', function() {
    const wrapper = shallow(<App />);
    expect(wrapper.find('SearchResultList')).to.have.length(1);
  });

  it('should include CountryDetail', function() {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CountryDetail')).to.have.length(1);
  });
});
