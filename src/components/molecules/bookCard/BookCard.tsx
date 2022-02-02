import React, { useState } from "react";
import Card from "@mui/material/Card";
import BookImage from "../../atoms/bookImage/BookImage";
import BookDetails from "../bookDetails/BookDetails";
import { ButtonProps } from "@mui/material";
import Box from "@mui/material/Box";

interface Props extends ButtonProps {
  coverImage: string;
  bookTitle: string;
  bookAuthor: string;
  time: string;
  isButtoned: Boolean;
  btnText?: string;
  handleClick?: any;
  index: number;
}

function BookCard(props: Props) {
  const {
    coverImage,
    bookTitle,
    bookAuthor,
    time,
    isButtoned,
    btnText,
    startIcon,
    index,
    handleClick,
  } = props;
  let paddingBottom = 0;
  const [isHovered, setHovered] = useState(false);
  if (!isButtoned) {
    paddingBottom = 4;
  }
  
  return (
    <div>
      <Card
        sx={{
          maxWidth: "284px",
          backgroundColor: "formBg.main",
          borderRadius: "8px",
          pb: paddingBottom,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => handleClick && handleClick(index-1)}
      >
        <BookImage source={coverImage} />
        <BookDetails
          bookTitle={bookTitle}
          bookAuthor={bookAuthor}
          time={time}
          isButtoned={isButtoned}
          btnText={btnText}
          startIcon={startIcon}
          isHovered={isHovered}
        />
      </Card>
    </div>
  );
}

export default BookCard;
