import React from "react";
import { DashboardUpdate } from "./DashboardUpdate";
import { render } from '@testing-library/react';
import { mount } from "enzyme";

describe("DashboardUpdate tests", () => {
  let component;

  beforeEach(() => {
    component = mount(<DashboardUpdate />);
  })

  it("should render", () => {
    expect(render(<DashboardUpdate />)).toBeTruthy();
  });
});
