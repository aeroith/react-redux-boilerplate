import React from 'react';
import { shallow } from 'enzyme';
import App from '../../../src/containers/App';

describe('App Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.application-main')).toHaveLength(1);
  });
});