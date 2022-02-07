import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TimeLeft from "./TimeLeft";

describe("Testing Footer List", () => {
  it("should match the Time Left snapshot", () => {
    const { container } = render(<TimeLeft time="13" />);
    expect(container).toMatchSnapshot();
  });
});
