import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Image from "../../atoms/image/Image";
import ReadingImg from "../../../media/readingImage.png";
import { message } from "./bannerMessage";

type Props = {};

const ExploreBookBanner = ({}: Props) => {
  return (
    <Paper
      sx={{
        bgcolor: "footerBgColor.main",
        px: 9,
        py: 4,
      }}
    >
      <Grid container>
        <Grid item sm={6} sx={{ py: 9 }}>
          <Grid container rowSpacing={4}>
            <Grid item sm={12}>
              <Typography variant="heading" color="navTextColors.main">
                Explore Books on entrepreneurship
              </Typography>
            </Grid>
            <Grid item sm={12}>
              <Typography variant="subtitle2" color="extraTextColor.main">
                {message}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image source={ReadingImg} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ExploreBookBanner;
