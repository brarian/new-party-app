import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../store';
const store = configureStore({});

import NewUserRegistration from '../components/new-user-registration';

describe('<NewUserRegistration />', () => {
  it('renders without crashing', () => {
    shallow( <Provider store = {store}> 
							< NewUserRegistration /> 
						</Provider>);
 })
})