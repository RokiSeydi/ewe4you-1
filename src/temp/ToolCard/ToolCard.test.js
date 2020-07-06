import React from 'react';
import { render } from '@testing-library/react';
import ToolCard from './ToolCard';

test('should render', () => {
    expect(render( < ToolCard / > )).toBeTruthy();
});