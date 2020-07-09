import React from 'react';
import { render } from '@testing-library/react';
import WellBean from './WellBean';

test('should render', () => {
    expect(render(< WellBean />)).toBeTruthy();
});
