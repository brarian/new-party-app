import React from 'react';
import { shallow } from 'enzyme';


import Time from '../components/time';

describe('<Time />', () => {
	it('Renders without crashing', () => {
	 shallow(<Time />);
	})

	it('has partybox and small box classNames', () => {
		const time = '2:30PM'
		const wrapper = shallow(<Time time={time} />)
		expect(wrapper.contains(<div>{time}</div>)).toEqual(true);
	})
})