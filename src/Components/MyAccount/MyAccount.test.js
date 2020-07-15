import React from './node_modules/react';
import { render } from './node_modules/@testing-library/react';
import MyAccount from './MyAccount';

test('should render', () => {
    expect(render( < MyAccount / > )).toBeTruthy();
});