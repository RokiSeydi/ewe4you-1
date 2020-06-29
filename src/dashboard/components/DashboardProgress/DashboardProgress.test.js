import React from "react";
import { DashboardProgress } from "./DashboardProgress";
import { render } from '@testing-library/react';
import { mount } from "enzyme";

describe("DashboardProgress tests", () => {
  let component;

  beforeEach(() => {
    component = mount(<DashboardProgress />);
  })

  it("should render", () => {
    expect(render(<DashboardProgress />)).toBeTruthy();
  });
});
