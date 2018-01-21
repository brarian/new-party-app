import React from 'react';
import {shallow, mount} from 'enzyme';

import Type from '../components/type';

describe('<Type />', () => {
  it('renders without crashing', () => {
			shallow(<Type />);
	})
})