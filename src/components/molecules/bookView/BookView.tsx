import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import BookImage from "../../atoms/bookImage/BookImage";
import TimeLeft from "../timeLeft/TimeLeft";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type Props = {
  bookTitle: string;
  bookDesc: string;
  bookAuthor: string;
  time: string;
  source: string;
};

const BookView = (props: Props) => {
  const { bookTitle, bookDesc, bookAuthor, time, source } = props;
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      <Box flexDirection="column">
        <Box pb={6}>
          <Typography variant="heading" color="navTextColors.main">
            {bookTitle}
          </Typography>
        </Box>
        <Box pb={6}>
          <Typography variant="subtitle3" color="navTextColors.main">
            {bookDesc}
          </Typography>
        </Box>
        <Box pb={4.5}>
          <Typography variant="body1" color="extraTextColor.main">
            {bookAuthor}
          </Typography>
        </Box>
        <Box pb={20.5}>
          <TimeLeft time={time}></TimeLeft>
        </Box>
        <Box flexDirection="row" justifyContent="space-between" width="100%">
          <Button
            variant="outlined"
            sx={{
              borderColor: "navTextColors.main",
              color: "primary.main",
              textTransform: "none",
              mr: 6,
              fontWeight:'bold'
            }}
          >
            Read Now
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "primary.main",
              color: "navTextColors.main",
              textTransform: "none",
              mr: 6,
              fontWeight:'bold'
            }}
          >
            Finished Reading
          </Button>
          <Button
            sx={{
              textTransform: "none",
              mr: 6,
              fontWeight:'bold'
            }}
            variant="text"
            color="extraTextColor"
            endIcon={<ArrowForwardIcon sx={{ color: "extraTextColor.main" }} />}
          >
            Send To Kindle
          </Button>
        </Box>
      </Box>
      <Box>
        <Box>
          <BookImage source={source} width="302px" />
        </Box>
      </Box>
    </Box>
  );
};

export default BookView;
