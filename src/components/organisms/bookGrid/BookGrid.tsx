import React from "react";
import { Box, Grid } from "@mui/material";
import BookCard from "../../molecules/bookCard/BookCard";
import { useAuth0 } from "@auth0/auth0-react";

interface bookData {
  id: number;
  coverImage: string;
  bookTitle: string;
  bookAuthor: string;
  time: string;
  isFinished: boolean;
}

type Props = {
  booksData: Array<bookData>;
  cardButtonClick: any;
};

function BookGrid(props: Props) {
  const { booksData, cardButtonClick } = props;
  const { isAuthenticated } = useAuth0();

  const booksGridItems = booksData.map((book) => {
    let buttonText = "Finish Reading";
    if (book.isFinished) {
      buttonText = "Read Again";
    }

    return (
      <Grid item xs={4} display="flex" justifyContent="center">
        <BookCard
          key={book.id}
          coverImage={`${process.env.PUBLIC_URL}/assets/cover_image/${book.coverImage}`}
          bookTitle={book.bookTitle}
          bookAuthor={book.bookAuthor}
          time={book.time}
          isButtoned={true}
          btnText={buttonText}
          handleClick={cardButtonClick}
          index={book.id}
        />
      </Grid>
    );
  });

  return (
    <div>
      <Grid container columnSpacing={"3vw"} rowGap={4}>
        {booksGridItems}
      </Grid>
    </div>
  );
}

export default BookGrid;