import React from 'react';
import {shallow, mount} from 'enzyme';


import Profile from '../components/user-profile';

describe('<Profile />', () => {
	it('Renders without crashing', () => {
	 shallow(<Profile />);
	})

	it('has partybox and small box classNames', () => {
		const wrapper = shallow(<Profile />)
		expect(wrapper.hasClass('party-box')).toEqual(true);
		expect(wrapper.hasClass('small-box')).toEqual(true);
	})
})