import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BookView from "../../molecules/bookView/BookView";
import BookImage from "../../../media/coverImage.png";
import HeaderWithBackDrop from "../../organisms/headerWithBackdrop/HeaderWithBackDrop";
import BookInfoTabs from "../../organisms/bookInfoTabs/BookInfoTabs";
import Footer from "../../molecules/footer/Footer";
import { bookProps } from "../../molecules/bookView/BookView";

const bookDetails = {
  bookTitle: "",
  bookDesc: "",
  bookAuthor: "",
  time: "",
  coverImage: "",
};

const BookDetailsPage = () => {
  const [data, setData] = useState<bookProps>(bookDetails);

  useEffect(() => {
    fetch("http://localhost:3000/trendingBlinkz/2")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  }, []);

  const addBook = () => {
    fetch("http://localhost:3000/myLibrary", {
      method: "POST",
      body: JSON.stringify({
        coverImage: "Entrepreneurship.png",
        bookTitle: "Beyond Entrepreneurship",
        bookAuthor: "Jim Collins & Bill Lazier",
        time: "13",
        isFinished: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <HeaderWithBackDrop>
        <Box sx={{ px: 62.5 }}>
          <Typography pb={10} variant="body2" color="navTextColors.main">
            Get the key ideas from
          </Typography>
          <BookView
            bookTitle={data.bookAuthor}
            bookAuthor={data.bookAuthor}
            bookDesc={data.bookDesc}
            time={data.time}
            coverImage={data.coverImage}
            onClick={addBook}
          />
          <BookInfoTabs />
        </Box>
        <Footer />
      </HeaderWithBackDrop>
    </div>
  );
};

export default BookDetailsPage;
