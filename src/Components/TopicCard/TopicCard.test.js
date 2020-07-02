import React from 'react';
import { render } from '@testing-library/react';
import TopicCard from './TopicCard';

test('should render', () => {
    expect(render( < TopicCard / > )).toBeTruthy();
});