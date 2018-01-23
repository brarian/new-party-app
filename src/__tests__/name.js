import React from 'react';
import { shallow, mount } from 'enzyme';

import Name from '../components/name';

describe('<Name />', () => {
 it('renders without crashing', () => {
  shallow( < Name /> );
 })

 it('renders an input type of text', () => {
	const wrapper = mount(<Name />);
	expect(wrapper.find('input[type="text"]'));
 })
})