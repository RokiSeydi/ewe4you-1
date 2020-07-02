import React from "react";
import  Dashboard from "./Dashboard";
import { render } from '@testing-library/react';

test('should render', () => {
  expect(render(<Dashboard />)).toBeTruthy();
});
