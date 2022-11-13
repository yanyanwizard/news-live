import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from './App';


describe('App', () => {

  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it ('renders an instance of the Main component', () => {
    expect(wrapper.find('Main').length).toEqual(1);
  })

  it ('renders the banner image', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });
});