import React from "react";
import { DashboardProgress } from "./DashboardProgress";
import { render } from '@testing-library/react';

test('should render', () => {
  expect(render(<DashboardProgress />)).toBeTruthy();
});
