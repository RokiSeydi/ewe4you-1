import React from 'react';
import { render } from '@testing-library/react';
import BurgerMenu from './BurgerMenu';

test('should render', () => {
    expect(render( < BurgerMenu / > )).toBeTruthy();
});