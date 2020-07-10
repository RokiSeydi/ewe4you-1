import React from 'react';
import { render } from '@testing-library/react';
import ToolCard from './ToolCard';
import tools from "../../data/tools"

test('should render', () => {
    expect(render( < ToolCard tool={tools[0]}/> )).toBeTruthy();
});