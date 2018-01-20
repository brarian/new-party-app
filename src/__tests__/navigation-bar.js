import React from 'react';
import { shallow } from 'enzyme';

import { NavigationBar } from "../components/navigation-bar";

describe('<NavigationBar />', () => {
	it('Renders without crashing', () => {
		shallow(<NavigationBar />);
	});

	it('should display new component once clicked', () => {
		const callback = jest.fn();
		const wrapper = shallow(<NavigationBar onClick={callback} />)
	})

})