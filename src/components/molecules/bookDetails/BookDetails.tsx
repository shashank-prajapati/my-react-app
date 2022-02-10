import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TimeLeft from "../timeLeft/TimeLeft";
import { ReactComponent as HorizontalMenu } from "../../../media/horizontalMenu.svg";
import BookCardButton from "../../atoms/bookCardButton/BookCardButton";
import { ButtonProps } from "@mui/material";
import Icon from "../../atoms/icon/Icon";

interface Props extends ButtonProps {
  time: string;
  bookTitle: string;
  bookAuthor: string;
  isButtoned: Boolean;
  btnText?: string;
  isHovered: Boolean;
}

function BookDetails(props: Props) {
  const {
    bookTitle,
    bookAuthor,
    time,
    isButtoned,
    btnText,
    startIcon,
    isHovered,
  } = props;
  let backgroundColor = "white";
  if (isHovered) {
    backgroundColor = "footerBgColor.main";
  }
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          width: "99%",
          mx: "auto",
          borderLeft: 1,
          borderRight: 1,
          borderColor: "secondary_100.main",
          bgcolor: isHovered ? "footerBgColor.main" : "white",
          mt: 0,
        }}
      >
        <Box sx={{ px: 4, pt: 6, pb: 2 }}>
          <Typography variant="subtitle2" color="navTextColors.main">
            {bookTitle}
          </Typography>
          <Typography
            variant="body1"
            color="extraTextColor.main"
            sx={{ mt: 4 }}
          >
            {bookAuthor}
          </Typography>
          <TimeLeft sx={{ mt: 4 }} time={time} />
          <Box
            sx={{
              display: "flex",
              mt: 2,
              justifyContent: "flex-end",
            }}
          >
            {!isButtoned && (
              <Icon iconComponent={HorizontalMenu} width="18px" height="4px" />
            )}
          </Box>
        </Box>
        {isButtoned && (
          <BookCardButton
            btnText={btnText}
            startIcon={startIcon}
            isHovered={isHovered}
          />
        )}
      </Box>
    </div>
  );
}

export default BookDetails;
