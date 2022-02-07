import React, { useState } from "react";
import BlinkistLogo from "../../../media/blinkistLogo.png";
import Box, { BoxProps } from "@mui/material/Box";
import SearchButton from "../../atoms/searchButton/SearchButton";
import AvatarButton from "../../molecules/avatarButton/AvatarButton";
import { useNavigate } from "react-router-dom";
import Image from "../../atoms/image/Image";
import ButtonAtom from "../../atoms/button/ButtonAtom";
import { theme } from "../../../themes/themes";

type Props = {
  btnClick?: React.MouseEventHandler<HTMLButtonElement>;
  btnIcon?: React.ReactNode;
};

function Header(props: Props) {
  const { btnClick, btnIcon } = props;
  const navigate = useNavigate();
  const gotoMyLibrary = () => {
    navigate("/");
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          px: "250px",
          py: "30px",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image source={BlinkistLogo} imgHeight="26px" imgWidth="124px" />
          <SearchButton sx={{ ml: 10 }} />
          <ButtonAtom
            ml={10}
            onClick={btnClick}
            endIcon={btnIcon}
            borderRadius={0}
            hoverBottomBorder={`1px solid ${theme.palette.primary.main}`}
            color="navTextColors"
            variant="text"
            hoverBackGroundColor="white"
          >
            Explore
          </ButtonAtom>
          <ButtonAtom
            variant="text"
            color="navTextColors"
            size="medium"
            onClick={gotoMyLibrary}
            ml={10}
          >
            My Library
          </ButtonAtom>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <AvatarButton />
        </Box>
      </Box>
    </div>
  );
}

export default Header;
