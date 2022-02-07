import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import HeaderWithBackDrop from "./HeaderWithBackDrop";

describe("Testing Header with back drop", () => {
  it("should match the Header with back drop snapshot", () => {
    const { container } = render(<HeaderWithBackDrop />);
    expect(container).toMatchSnapshot();
  });
});
