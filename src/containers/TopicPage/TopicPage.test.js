import React from 'react';
import { render } from '@testing-library/react';
import TopicPage from './TopicPage';

test('should render', () => {
    expect(render( < TopicPage / > )).toBeTruthy();
});