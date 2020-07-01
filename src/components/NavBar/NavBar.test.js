import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './NavBar';

test('should render', () => {
    expect(render( < NavBar / > )).toBeTruthy();
});