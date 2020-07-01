import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

test('should render', () => {
    expect(render( < Navbar / > )).toBeTruthy();
});