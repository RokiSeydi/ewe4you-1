import React from 'react';
import { render } from '@testing-library/react';
import LandingPage from './LandingPage';

test('should render', () => {
    expect(render( < LandingPage / > )).toBeTruthy();
});