import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BookGrid from "./BookGrid";

import BBCoverImage from "../../../media/cover_image/Boss.png";
import ETECoverImage from "../../../media/cover_image/ETE.png";
import DHTACoverImage from "../../../media/cover_image/DHTA.png";
import FOFCoverImage from "../../../media/cover_image/FOF.png";
import LOSCoverImage from "../../../media/cover_image/LOS.png";
import LYBCoverImage from "../../../media/cover_image/LYB.png";
import TLCCoverImage from "../../../media/cover_image/TLC.png";
import EBFBCoverImage from "../../../media/cover_image/EBFB.png";
import DropshippingCoverImage from "../../../media/cover_image/DropShipping.png";
import EntrepreneurshipCI from "../../../media/cover_image/Entrepreneurship.png";

const booksData = [
    {
      id: 1,
      coverImage: BBCoverImage,
      bookTitle: "Being Boss",
      bookAuthor: "Kathleen Shannon and Emily...",
      time: "13",
      isFinished:false
    },
    {
      id: 2,
      coverImage: ETECoverImage,
      bookTitle: "Employee to Entrepreneur",
      bookAuthor: "Steve Glaveski",
      time: "15",
      isFinished:false
    },
    {
      id: 3,
      coverImage: DHTACoverImage,
      bookTitle: `Doesn’t Hurt to Ask`,
      bookAuthor: "Trey Gowdy",
      time: "13",
      isFinished:false
    },
    {
      id: 4,
      coverImage: FOFCoverImage,
      bookTitle: `The Fate of Food`,
      bookAuthor: "Amanda Little",
      time: "12",
      isFinished:false
    },
    {
      id: 5,
      coverImage: LOSCoverImage,
      bookTitle: `Lives of the Stoics`,
      bookAuthor: "Ryan Holiday, Stephen Hansel",
      time: "12",
      isFinished:false
    },
    {
      id: 6,
      coverImage: LYBCoverImage,
      bookTitle: `Loving Your Business`,
      bookAuthor: "Debbie King",
      time: "12",
      isFinished:false
    },
    {
      id: 7,
      coverImage: TLCCoverImage,
      bookTitle: `The Lonely Century`,
      bookAuthor: "Noreena Hertz",
      time: "15",
      isFinished:false
    },
    {
      id: 8,
      coverImage: EBFBCoverImage,
      bookTitle: `Eat Better, Feel Better`,
      bookAuthor: "Giada De Laurentiis",
      time: "13",
      isFinished:false
    },
    {
      id: 9,
      coverImage: DropshippingCoverImage,
      bookTitle: `Dropshipping`,
      bookAuthor: "James Moore",
      time: "12",
      isFinished:false
    },
    {
      id: 10,
      coverImage: EntrepreneurshipCI,
      bookTitle: "Beyond Entrepreneurship",
      bookAuthor: "Jim Collins & Bill Lazier",
      time: "13", 
      isFinished:true
    }
  ];
  

describe("Testing Book Grid", () => {
  it("should match the Book Grid snapshot", () => {
    const { container } = render(<BookGrid booksData={booksData} cardButtonClick={undefined} />);
    expect(container).toMatchSnapshot();
  });
  
  it("should call on click method of finished reading", () => {
    const handleClick = jest.fn();
    const { container } = render(
      <BookGrid
        booksData={booksData}
        cardButtonClick={handleClick}
      ></BookGrid>
    );
    fireEvent.click(screen.getAllByText("Finish Reading")[0]);
    expect(handleClick).toHaveBeenCalled();
  });

  it("should call on click method of read again", () => {
    const handleClick = jest.fn();
    const { container } = render(
      <BookGrid
        booksData={booksData}
        cardButtonClick={handleClick}
      ></BookGrid>
    );
    fireEvent.click(screen.getAllByText("Read Again")[0]);
    expect(handleClick).toHaveBeenCalled();
  });
});
