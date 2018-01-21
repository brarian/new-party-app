import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider } from 'react-redux';
import configureStore from '../store';
const store = configureStore({});

import Profile from '../components/user-profile';

describe('<Profile />', () => {
	it('Renders without crashing', () => {
	 shallow( <Provider store={store}> <Profile /> </Provider>);
	})

	it('has party-box and small box classNames', () => {
		const wrapper = shallow(<Profile />);
		expect(wrapper.hasClass(`party-box`)).toEqual(true)
		expect(wrapper.hasClass(`small-box`)).toEqual(true)

	})
})