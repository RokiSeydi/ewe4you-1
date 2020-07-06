import React from 'react';
import { render } from '@testing-library/react';
import TopicOverview from './TopicOverview';

test('should render', () => {
    expect(render( < TopicOverview topics="test"/>)).toBeTruthy();
});