import React from 'react';
import { shallow, mount } from 'enzyme';

import Menu from '../components/menu';

describe('<Menu />', () => {
 it('renders without crashing', () => {
  shallow( < Menu /> );
 })

 it('has 4 inputs', () => {
	 const wrapper = mount(<Menu />);
	 expect(wrapper.find('input').length).toEqual(4);
 })
})