import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../store';
import NavigationBar from "../components/navigation-bar";

const store = configureStore({});


describe('<NavigationBar />', () => {
	it('Renders without crashing', () => {
		shallow(<Provider store={store}>
		 <NavigationBar /> 
		 </Provider>);
	});

})