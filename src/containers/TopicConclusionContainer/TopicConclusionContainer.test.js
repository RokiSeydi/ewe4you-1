import React from 'react';
import { render } from '@testing-library/react';
import TopicConclusionContainer from './TopicConclusionContainer';


test('should render', () => {
    expect(render( < TopicConclusionContainer / > )).toBeTruthy();
});