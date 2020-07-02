import React from 'react';
import { render } from '@testing-library/react';
import ToolPage from './ToolPage';

test('should render', () => {
    expect(render( < ToolPage / > )).toBeTruthy();
});