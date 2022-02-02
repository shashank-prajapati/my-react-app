import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BookView from "../../molecules/bookView/BookView";
import BookImage from "../../../media/coverImage.png";
import HeaderWithBackDrop from "../../organisms/headerWithBackdrop/HeaderWithBackDrop";
import BookInfoTabs from "../../organisms/bookInfoTabs/BookInfoTabs";
import Footer from "../../molecules/footer/Footer";

type Props = {};

const bookDetails = {
  time: "13",
  bookAuthor: "Jim Collins & Bill Lazier",
  bookTitle: "Beyond Entrepreneurship",
  bookDesc: "Turning Your Business into an Enduring Great Company",
  source: BookImage,
};

const BookDetailsPage = ({}: Props) => {
  return (
    <div>
      <HeaderWithBackDrop>
        <Box sx={{ px: 62.5 }}>
          <Typography pb={10} variant="body2" color="navTextColors.main">
            Get the key ideas from
          </Typography>
          <BookView
            bookTitle={bookDetails.bookAuthor}
            bookAuthor={bookDetails.bookAuthor}
            bookDesc={bookDetails.bookDesc}
            time={bookDetails.time}
            source={bookDetails.source}
          />
          <BookInfoTabs />
        </Box>
      </HeaderWithBackDrop>
      <Footer />
    </div>
  );
};

export default BookDetailsPage;
