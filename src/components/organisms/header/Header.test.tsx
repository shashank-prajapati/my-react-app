import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Header from "./Header";

describe("Testing Explore Menu", () => {
  it("should match the Explore Menu snapshot", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });

  it("should call the on click function", () => {
    const handleClick = jest.fn();
    const { container } = render(<Header btnClick={handleClick} />);

    fireEvent.click(screen.getByText("Explore"));
  });
});
