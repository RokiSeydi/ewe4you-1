import React from "react";
import  DashboardUpdate  from "./DashboardUpdate";
import { render } from '@testing-library/react';

test('should render', () => {
  expect(render(<DashboardUpdate strText="test" strTitle="test" />)).toBeTruthy();
});

