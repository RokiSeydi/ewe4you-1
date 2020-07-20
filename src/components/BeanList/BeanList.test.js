import React from 'react';
import { render } from '@testing-library/react';
import BeanList from './BeanList';

test('should render', () => {
    expect(render( < BeanList text = "blah" / > )).toBeTruthy();
});