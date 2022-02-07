import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../organisms/header/Header";
import HeaderWithBackDrop from "../../organisms/headerWithBackdrop/HeaderWithBackDrop";
import BBCoverImage from "../../../media/cover_image/Boss.png";
import ETECoverImage from "../../../media/cover_image/ETE.png";
import DHTACoverImage from "../../../media/cover_image/DHTA.png";
import FOFCoverImage from "../../../media/cover_image/FOF.png";
import LOSCoverImage from "../../../media/cover_image/LOS.png";
import LYBCoverImage from "../../../media/cover_image/LYB.png";
import TLCCoverImage from "../../../media/cover_image/TLC.png";
import EBFBCoverImage from "../../../media/cover_image/EBFB.png";
import EntrepreneurshipCI from "../../../media/cover_image/Entrepreneurship.png";
import BookCard from "../../molecules/bookCard/BookCard";
import AddIcon from "@mui/icons-material/Add";
import { theme } from "../../../themes/themes";
import ExploreBookBanner from "../../molecules/exploreBooksBanner/ExploreBookBanner";
import SearchBar from "../../atoms/searchBar/SearchBar";
import AddBookGrid from "../../organisms/addBookGrid/AddBookGrid";
import Footer from "../../molecules/footer/Footer";
import Dropshipping from "../../../media/cover_image/DropShipping.png";
import { Paper } from "@mui/material";
import { bookProps } from "../../organisms/addBookGrid/AddBookGrid";

type Props = {};

const EntrepreneurshipBooks = ({}: Props) => {
  const [trendingBlinkz, setTrendingBlinkz] = useState<Array<bookProps>>([]);
  const [justAdded, setJustAdded] = useState<Array<bookProps>>([]);
  const [audioBlinkz, setAudioBlinkz] = useState<Array<bookProps>>([]);

  useEffect(() => {
    fetch("http://localhost:3000/trendingBlinkz/")
      .then((response) => response.json())
      .then((json) => {
        setTrendingBlinkz(json);
      });
    fetch("http://localhost:3000/justAdded")
      .then((response) => response.json())
      .then((json) => {
        setJustAdded(json);
      });
    fetch("http://localhost:3000/audioBlinkz")
      .then((response) => response.json())
      .then((json) => {
        setAudioBlinkz(json);
      });
  }, []);

  return (
    <div>
      <HeaderWithBackDrop>
        <Box sx={{ px: 60 }}>
          <ExploreBookBanner />
          <Box sx={{ mt: 14 }}>
            <SearchBar />
          </Box>
          <Typography
            sx={{ mt: 20, mb: 6 }}
            variant="h3"
            color={theme.palette.navTextColors.main}
          >
            Trending blinks
          </Typography>
          <AddBookGrid gridData={trendingBlinkz} />
          <Typography
            sx={{ mt: 20, mb: 6 }}
            variant="h3"
            color={theme.palette.navTextColors.main}
          >
            Just added
          </Typography>
          <AddBookGrid gridData={justAdded} />
          <Typography
            sx={{ mt: 20, mb: 6 }}
            variant="h3"
            color={theme.palette.navTextColors.main}
          >
            Featured audio blinks
          </Typography>
          <AddBookGrid gridData={audioBlinkz} />
        </Box>
        <Footer />
      </HeaderWithBackDrop>
    </div>
  );
};

export default EntrepreneurshipBooks;
