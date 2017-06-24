import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../src/App';

describe('<App />', function () {
  it('should include a SearchBox', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.find('SearchBox')).to.have.length(1);
  });
});
