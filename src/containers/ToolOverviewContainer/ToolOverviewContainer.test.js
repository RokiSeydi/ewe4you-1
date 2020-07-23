import React from 'react';
import { render } from '@testing-library/react';
import ToolOverviewContainer from './ToolOverviewContainer';


test('should render', () => {
    expect(render( < ToolOverviewContainer / > )).toBeTruthy();
});