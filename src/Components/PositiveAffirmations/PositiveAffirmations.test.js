import React from "react";
import  PositiveAffirmations from "./PositiveAffirmations";
import { render } from '@testing-library/react';

test('should render', () => {
  expect(render(<PositiveAffirmations />)).toBeTruthy();
});