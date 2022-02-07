import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ExploreMenu from "./ExploreMenu";

describe("Testing Explore Menu", () => {
  it("should match the Explore Menu snapshot", () => {
    const { container } = render(<ExploreMenu/>);
    expect(container).toMatchSnapshot();
  });
});
