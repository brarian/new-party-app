import React from 'react';
import {mount} from 'enzyme';
import About from '../components/about';


describe('<About />', () => {
    it(`renders About component without crashing`, () => {
    const wrapper = mount(<About />);
    expect(wrapper.find('.party-box').length).toEqual(1);
    });
});