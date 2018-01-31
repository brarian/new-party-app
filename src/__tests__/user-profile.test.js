import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider } from 'react-redux';
import configureStore from '../store';
const store = configureStore({});

import Profile from '../components/user-profile';

describe('<Profile />', () => {
	it('Renders without crashing', () => {
	 shallow( <Provider store={store}> 
	 			<Profile /> 
			</Provider>);
	})
})