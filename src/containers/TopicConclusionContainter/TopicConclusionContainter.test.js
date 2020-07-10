import React from 'react';
import { render } from '@testing-library/react';
import TopicConclusionContainter from './TopicConclusionContainter';


test('should render', () => {
    expect(render( < TopicConclusionContainter / > )).toBeTruthy();
});