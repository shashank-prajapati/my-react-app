import * as React from "react";
import { render, fireEvent ,screen} from "@testing-library/react";
import ExploreBookBanner from "./ExploreBookBanner";
import { Typography } from "@mui/material";
import BookImage from "../../../media/coverImage.png";

describe("Testing Explore Banner", () => {
  it("should match the Explore Banner snapshot", () => {
    const { container } = render(
      <ExploreBookBanner/>
    );
    expect(container).toMatchSnapshot();
  });
});
