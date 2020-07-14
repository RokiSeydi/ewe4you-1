import React from "react";
import StressGraph from "./StressGraph";
import { render } from '@testing-library/react';

test('should render', () => {
    expect(render( < StressGraph / > )).toBeTruthy();
});