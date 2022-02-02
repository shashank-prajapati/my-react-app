import { Box } from "@mui/material";
import React from "react";
import AccountAvatar from "../../atoms/accountAvatar/AccountAvatar";
import ExpandMoreLogo from "../../atoms/expandMoreIcon/ExpandMoreLogo";

type Props = {};

function AvatarButton({}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <AccountAvatar />
      <ExpandMoreLogo />
    </Box>
  );
}

export default AvatarButton;
