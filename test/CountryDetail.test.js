import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CountryDetail from '../src/CountryDetail';

describe('<CountryDetail />', function () {
  it('should display country', function() {
    const country = 'Japan';
    const wrapper = shallow(<CountryDetail country={country} />);
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should not display country when there is none', function() {
    const country = null;
    const wrapper = shallow(<CountryDetail country={country} />);
    expect(wrapper.find('div')).to.have.length(0);
  });
});
