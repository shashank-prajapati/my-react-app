import { Box, Button, Grid, Typography, ButtonProps } from "@mui/material";
import React from "react";
import TimeLeft from "../timeLeft/TimeLeft";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "../../atoms/image/Image";

export interface bookProps extends ButtonProps {
  bookTitle: string;
  bookDesc: string;
  bookAuthor: string;
  time: string;
  coverImage: string;
};

const BookView = (props: bookProps) => {
  const { bookTitle, bookDesc, bookAuthor, time, coverImage, onClick } = props;
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
            onClick={onClick}
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
          <Image source={`${process.env.PUBLIC_URL}/assets/cover_image/${coverImage}`} imgWidth="302px" imgHeight="302px" />
        </Box>
      </Box>
    </Box>
  );
};

export default BookView;
