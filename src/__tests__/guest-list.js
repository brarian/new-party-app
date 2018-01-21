import React from 'react';
import { shallow, mount } from 'enzyme';


import GuestListForm from '../components/guest-list';


describe('<GuestListForm />', () => {
 it('renders without crashing', () => {
  shallow( < GuestListForm /> );
 })

 it('returns name', () => {
  const t = mount( < GuestListForm /> );
  t.find('input').node.value = 'Daisy';
  expect(t.val()).toEqual("Daisy");
 });
})