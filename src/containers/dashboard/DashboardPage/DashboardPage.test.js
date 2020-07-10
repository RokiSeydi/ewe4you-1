import React from "react";
import  DashboardPage from "./DashboardPage";
import { render } from '@testing-library/react';

test('should render', () => {
  expect(render(<DashboardPage />)).toBeTruthy();
});
