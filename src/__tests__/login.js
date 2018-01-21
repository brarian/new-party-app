import React from 'react';
import { shallow, mount } from 'enzyme';
import {Provider } from 'react-redux';
import configureStore from '../store';
const store = configureStore({});

import Login from '../components/login';

describe('<Login />', () => {
 it('renders without crashing', () => {
  shallow( <Provider store={store}>
   				<Login /> 
			</Provider>
			);
 })
})