import React from 'react';
import { render } from '@testing-library/react';
import CollapseMenu from './CollapseMenu';

test('should render', () => {
    expect(render( < CollapseMenu / > )).toBeTruthy();
});