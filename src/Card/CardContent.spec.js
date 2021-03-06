// @flow

import React from 'react';
import { assert } from 'chai';
import { createShallow, getClasses } from '../test-utils';
import CardContent, { styleSheet } from './CardContent';

describe('<CardContent />', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallow({ untilSelector: 'CardContent' });
    classes = getClasses(styleSheet);
  });

  it('should render a div with the root class', () => {
    const wrapper = shallow(<CardContent />);
    assert.strictEqual(wrapper.name(), 'div');
    assert.strictEqual(wrapper.hasClass(classes.root), true);
  });
});
