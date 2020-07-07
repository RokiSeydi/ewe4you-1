import React from 'react';
import { render } from '@testing-library/react';
import TopicOverviewContainer from './TopicOverviewContainer';

test('should render', () => {
    expect(render( < TopicOverviewContainer / > )).toBeTruthy();
});