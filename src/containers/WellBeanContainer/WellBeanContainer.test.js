import React from 'react';
import { render } from '@testing-library/react';
import WellBeanContainer from './WellBeanContainer';

test('should render', () => {
    expect(render( < WellBeanContainer / > )).toBeTruthy();
});