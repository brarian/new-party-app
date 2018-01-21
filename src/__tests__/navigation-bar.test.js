import React from 'react';
import { shallow } from 'enzyme';
import {Provider } from 'react-redux';
import configureStore from '../store';
const store = configureStore({});

import { NavigationBar } from "../components/navigation-bar";

describe('<NavigationBar />', () => {
	it('Renders without crashing', () => {
		shallow(<Provider store={store}> <NavigationBar /> </Provider>);
	});

	// it('should display new component once clicked', () => {
	// 	const callback = jest.fn();
	// 	const wrapper = shallow(<NavigationBar onClick={callback} />)
	// })

})