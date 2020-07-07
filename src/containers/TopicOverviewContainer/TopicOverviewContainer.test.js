import React from 'react';
import { render } from '@testing-library/react';
import TopicOverviewContainer from './TopicOverviewContainer';
import topics from "../../data/topics"

test('should render', () => {
    expect(render( < TopicOverviewContainer topic={topics[0]}/ > )).toBeTruthy();
});