import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button ';

test('should render', () => {
    expect(render( < Button /> )).toBeTruthy();
});