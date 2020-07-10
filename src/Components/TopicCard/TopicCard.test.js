import React from 'react';
import { render } from '@testing-library/react';
import TopicCard from './TopicCard';
import topics from "../../data/topics"

test('should render', () => {
    expect(render( < TopicCard topic={topics[0]}/> )).toBeTruthy();
});