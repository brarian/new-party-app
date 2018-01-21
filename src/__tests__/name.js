import React from 'react';
import {shallow, mount} from 'enzyme';

import Name from '../components/name';

describe('<Name />', () => {
  it('renders without crashing', () => {
			shallow(<Name />);
	})
})