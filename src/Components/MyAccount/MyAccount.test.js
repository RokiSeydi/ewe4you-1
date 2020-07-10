import React from 'react';
import { render } from '@testing-library/react';
import MyAccount from './MyAccount';

test('should render', () => {
    expect(render( < MyAccount / > )).toBeTruthy();
});