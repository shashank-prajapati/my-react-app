import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeaderWithBackDrop from "../../organisms/headerWithBackdrop/HeaderWithBackDrop";
import { theme } from "../../../themes/themes";
import ExploreBookBanner from "../../molecules/exploreBooksBanner/ExploreBookBanner";
import SearchBar from "../../atoms/searchBar/SearchBar";
import AddBookGrid from "../../organisms/addBookGrid/AddBookGrid";
import Footer from "../../molecules/footer/Footer";
import { bookProps } from "../../organisms/addBookGrid/AddBookGrid";
import { useNavigate } from "react-router-dom";

type Props = {};

const EntrepreneurshipBooks = ({}: Props) => {
  const [trendingBlinkz, setTrendingBlinkz] = useState<Array<bookProps>>([]);
  const [justAdded, setJustAdded] = useState<Array<bookProps>>([]);
  const [audioBlinkz, setAudioBlinkz] = useState<Array<bookProps>>([]);

  const navigate = useNavigate();
  const openPage = (catName: string) => {
    let path = "/explore-books/" + catName;
    navigate(path);
  };

  const gotoMyLibrary = () => {
    navigate("/");
  };

  const gotoBookPage = () => {
    let path = "/book/beyond-entrepreneurship-2.0";
    navigate(path);
  };

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
      <HeaderWithBackDrop
        onExploreMenuClick={openPage}
        gotoMyLibrary={gotoMyLibrary}
      >
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
          <AddBookGrid gridData={trendingBlinkz} handleClick={gotoBookPage} />
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
