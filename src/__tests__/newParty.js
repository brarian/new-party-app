import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider } from 'react-redux';
import configureStore from '../store';
const store = configureStore({});

import NewParty from '../components/newParty';

describe('<NewParty />', () => {
  it('renders without crashing', () => {
		shallow(<Provider store={store}> 
		<NewParty /></Provider>);
	})
})