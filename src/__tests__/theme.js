import React from 'react';
import {shallow, mount} from 'enzyme';

import Menu from '../components/menu';

describe('<Menu />', () => {
  it('renders without crashing', () => {
			shallow(<Menu />);
	})
})