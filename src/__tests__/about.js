import React from 'react';
import {shallow} from 'enzyme';
import About from '../components/about';
describe('<About />', () => {
    it(`renders About component without crashing`, () => {
    const wrapper = shallow(<About />);
    expect(wrapper.hasClass(`party-box`)).toEqual(true)
    });
});