import * as React from "react";
import { render, fireEvent ,screen} from "@testing-library/react";
import BookCard from "./BookCard";
import { Typography } from "@mui/material";
import coverImage from "../../../media/coverImage.png";

describe("Testing Book Card", () => {
  it("should match the unButtoned Book Card Snapshot", () => {
    const { container } = render(
      <BookCard
        coverImage={coverImage}
        time="13"
        bookAuthor={`Jim Collins & Bill Lazier`}
        bookTitle="Beyond Entrepreneurship"
        isButtoned={false}
        index={0}
      ></BookCard>
    );
    expect(container).toMatchSnapshot();
  });
  it("should match the Buttoned Book Card Snapshot", () => {
    const { container } = render(
      <BookCard
        coverImage={coverImage}
        time="13"
        bookAuthor={`Jim Collins & Bill Lazier`}
        bookTitle="Beyond Entrepreneurship"
        isButtoned={true}
        btnText="Add to library"
        index={0}
      ></BookCard>
    );
    expect(container).toMatchSnapshot();
  });

  it("should call on click method of button", () => {
    const handleClick = jest.fn();
    const { container } = render(
      <BookCard
        coverImage={coverImage}
        time="13"
        bookAuthor={`Jim Collins & Bill Lazier`}
        bookTitle="Beyond Entrepreneurship"
        isButtoned={true}
        btnText="Add to library"
        index={0}
        onClick={handleClick}
      ></BookCard>
    );
    fireEvent.click(screen.getByText("Add to library"));
    expect(handleClick).toHaveBeenCalled();
  });
});
