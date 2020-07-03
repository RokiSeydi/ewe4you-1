import React from 'react';
import { render } from '@testing-library/react';
import CardCarousel from './CardCarousel';

test('should render', () => {
    expect(render(< CardCarousel />)).toBeTruthy();
});