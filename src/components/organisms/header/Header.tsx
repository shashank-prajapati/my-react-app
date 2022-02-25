import React, { useState } from "react";
import BlinkistLogo from "../../../media/blinkistLogo.png";
import Box, { BoxProps } from "@mui/material/Box";
import IconButton from "../../atoms/iconButton/IconButton";
import AvatarButton from "../../molecules/avatarButton/AvatarButton";
import Image from "../../atoms/image/Image";
import ButtonAtom from "../../atoms/button/ButtonAtom";
import { theme } from "../../../themes/themes";
import { useAuth0 } from "@auth0/auth0-react";
import { Menu, MenuItem } from "@mui/material";
import { ReactComponent as SearchIcon } from "../../../media/searchIcon.svg";

type Props = {
  btnClick?: React.MouseEventHandler<HTMLButtonElement>;
  btnIcon?: React.ReactNode;
  gotoMyLibrary?: any;
};

function Header(props: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { btnClick, btnIcon, gotoMyLibrary } = props;
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const logoutBtnClick = () => {
    handleClose();
    logout({ returnTo: window.location.origin });
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
          <IconButton iconComponent={SearchIcon} sx={{ ml: 10 }} />
          <ButtonAtom
            ml={10}
            onClick={btnClick}
            endIcon={btnIcon}
            borderRadius={0}
            hoverBottomBorder={`1px solid ${theme.palette.primary.main}`}
            textColor="navTextColors.main"
            variant="text"
            hoverBackGroundColor="white"
          >
            Explore
          </ButtonAtom>
          <ButtonAtom
            variant="text"
            textColor="navTextColors.main"
            size="medium"
            onClick={() => gotoMyLibrary()}
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
          {!isAuthenticated && (
            <ButtonAtom
              variant="text"
              textColor="navTextColors.main"
              onClick={() => loginWithRedirect()}
            >
              Signin
            </ButtonAtom>
          )}

          {isAuthenticated && (
            <AvatarButton
              data-testid="account-Btn"
              onClick={handleClick}
              isAuthenticated={isAuthenticated}
              userName={user && user.email}
            />
          )}
          <Menu
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={logoutBtnClick}>Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
    </div>
  );
}

export default Header;
