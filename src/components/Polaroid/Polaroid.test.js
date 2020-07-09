import React from 'react';
import { render } from '@testing-library/react';
import Polaroid from './Polaroid';

test('should render', () => {
    expect(render( <Polaroid /> )).toBeTruthy();
});