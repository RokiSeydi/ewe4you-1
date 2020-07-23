import React from 'react';
import { render } from '@testing-library/react';
import ToolOverviewContainer from "./ToolOverviewContainer"
import tools from"../../data/tools"


test('should render', () => {
    expect(render( < ToolOverviewContainer tool={tools[0]}/ > )).toBeTruthy();
});