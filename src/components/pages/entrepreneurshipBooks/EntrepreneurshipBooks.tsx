import { Box, Grid, Typography } from "@mui/material";
import React from "react";
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
import {Paper} from "@mui/material";

type Props = {};

const Trendingblinks = [
  {
    id: 1,
    coverImage: BBCoverImage,
    bookTitle: "Being Boss",
    bookAuthor: "Kathleen Shannon and Emily...",
    time: "13",
  },
  {
    id: 2,
    coverImage: EntrepreneurshipCI,
    bookTitle: "Beyond Entrepreneurship",
    bookAuthor: "Jim Collins & Bill Lazier",
    time: "13",
  },
  {
    id: 3,
    coverImage: ETECoverImage,
    bookTitle: "Employee to Entrepreneur",
    bookAuthor: "Steve Glaveski",
    time: "15",
  },
  {
    id: 4,
    coverImage: FOFCoverImage,
    bookTitle: `The Fate of Food`,
    bookAuthor: "Amanda Little",
    time: "12",
  },
  {
    id: 5,
    coverImage: LOSCoverImage,
    bookTitle: `Lives of the Stoics`,
    bookAuthor: "Ryan Holiday, Stephen Hansel",
    time: "12",
  },
  {
    id: 6,
    coverImage: LYBCoverImage,
    bookTitle: `Loving Your Business`,
    bookAuthor: "Debbie King",
    time: "12",
  },
];

const JustAdded = [
  {
    id: 1,
    coverImage: TLCCoverImage,
    bookTitle: "The Lonely Century",
    bookAuthor: "Noreena Hertz",
    time: "13",
  },
  {
    id: 2,
    coverImage: EBFBCoverImage,
    bookTitle: "Eat Better, Feel Better",
    bookAuthor: "Giada De Laurentiis",
    time: "13",
  },
  {
    id: 3,
    coverImage: Dropshipping,
    bookTitle: "Dropshipping",
    bookAuthor: "James Moore",
    time: "12",
  },
];

const FeaturedAudioBook = [
  {
    id: 1,
    coverImage: ETECoverImage,
    bookTitle: "Employee to Entrepreneur",
    bookAuthor: "Steve Glaveski",
    time: "15",
  },
  {
    id: 2,
    coverImage: EntrepreneurshipCI,
    bookTitle: "Beyond Entrepreneurship",
    bookAuthor: "Jim Collins & Bill Lazier",
    time: "13",
  },
  {
    id: 3,
    coverImage: DHTACoverImage,
    bookTitle: "Doesn’t Hurt to Ask",
    bookAuthor: "Trey Gowdy",
    time: "13",
  },
];

const EntrepreneurshipBooks = ({}: Props) => {
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
          <AddBookGrid gridData={Trendingblinks} />
          <Typography
            sx={{ mt: 20, mb: 6 }}
            variant="h3"
            color={theme.palette.navTextColors.main}
          >
            Just added
          </Typography>
          <AddBookGrid gridData={JustAdded} />
          <Typography
            sx={{ mt: 20, mb: 6 }}
            variant="h3"
            color={theme.palette.navTextColors.main}
          >
            Featured audio blinks
          </Typography>
          <AddBookGrid gridData={FeaturedAudioBook} />
        </Box>
      </HeaderWithBackDrop>
      <Footer />
    </div>
  );
};

export default EntrepreneurshipBooks;
