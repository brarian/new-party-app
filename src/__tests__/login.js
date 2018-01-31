import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../store';
const store = configureStore({});

import Login from '../components/login';

describe('<Login />', () => {
 it('renders without crashing', () => {
  shallow( < Provider store ={store}><Login /></Provider>
  );
 })
 it('renders text and password inputs', () => {
	const wrapper = mount( <Provider store ={store}><Login /></Provider>);
	expect(wrapper.find('input[type="password"]').length).toEqual(1);
	expect(wrapper.find('input[type="text"]').length).toEqual(1);
 })
})