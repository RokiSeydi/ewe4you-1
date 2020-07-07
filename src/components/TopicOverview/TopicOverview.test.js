import React from 'react';
import { render } from '@testing-library/react';
import TopicOverview from './TopicOverview';
import topics from "../../data/topics"

test('should render', () => {
    expect(render( < TopicOverview topic={topics[0]}/>)).toBeTruthy();
});