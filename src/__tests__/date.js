import React from 'react';
import {shallow, mount} from 'enzyme';


import Date from '../components/date';


describe('<Date />', () => {
  it('renders without crashing', () => {
			shallow(<Date />);
	})

	it('should fire the onChange ', () => {
		const onChange = jest.fn();
		const wrapper = mount(<Date onChange={callbakc} />)
	})
})