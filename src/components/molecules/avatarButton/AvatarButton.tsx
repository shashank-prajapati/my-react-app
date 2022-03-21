import { Box } from "@mui/material";
import React from "react";
import AccountAvatar from "../../atoms/accountAvatar/AccountAvatar";
import { ReactComponent as ExpandMoreIcon } from "../../../media/expandMore.svg";
import Icon from "../../atoms/icon/Icon";

type Props = {
  onClick?: any;
  isAuthenticated: boolean;
  userName?: string;
};

function AvatarButton(props: Props) {
  const { onClick, isAuthenticated, userName } = props;

  return (
    <div onClick={onClick}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        {isAuthenticated && (
          <AccountAvatar initials={userName ? userName[0] : "A"} />
        )}
        {isAuthenticated && (
          <Icon
            iconComponent={ExpandMoreIcon}
            width="11px"
            height="6px"
            ml={1}
          />
        )}
      </Box>
    </div>
  );
}

export default AvatarButton;
