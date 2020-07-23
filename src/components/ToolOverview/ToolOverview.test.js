import React from 'react';
import { render } from '@testing-library/react';
import ToolOverview from './ToolOverview';
import tools from "../../data/tools"

test('should render', () => {
    expect(render( < ToolOverview tool={tools[0]}/>)).toBeTruthy();
});