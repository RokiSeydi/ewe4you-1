import React from 'react';
import { render } from '@testing-library/react';
import NavigationBar from './NavigationBar';

test('should render', () => {
    expect(render( < NavigationBar /> )).toBeTruthy();
});
