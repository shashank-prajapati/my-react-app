import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import HeaderWithBackDrop from "./HeaderWithBackDrop";

describe("Testing Header with back drop", () => {
  it("should match the default snapshot", () => {
    const { container } = render(<HeaderWithBackDrop />);
    expect(container).toMatchSnapshot();
  });
});
