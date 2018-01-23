import React from 'react';
import { shallow, mount } from 'enzyme';


import Date from '../components/date';


describe('<Date />', () => {
	it('renders without crashing', () => {
  shallow( < Date /> );
 })

	it('has an input type of text', () => {
    const wrapper = mount( < Date /> );
    expect(wrapper.find('input').length).toEqual(1);
 }); 

})