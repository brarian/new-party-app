import React from 'react';
import { shallow } from 'enzyme';

import Time from '../components/time';

describe('<Time />', () => {
	it('Renders without crashing', () => {
	 shallow(<Time />);
	})
})