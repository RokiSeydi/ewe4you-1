import React from 'react';
import { render } from '@testing-library/react';
import TopicConclusion from './TopicConclusion';
import topics from "../../data/topics"

test('should render', () => {
    expect(render( < TopicConclusion topic={topics[0]}/>)).toBeTruthy();
});