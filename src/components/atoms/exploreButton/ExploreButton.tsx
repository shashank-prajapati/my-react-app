import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BoxProps } from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
import { theme } from "../../../themes/themes";

interface Props extends ButtonProps {}

function ExploreButton(props: Props) {
  const { sx, onClick, endIcon } = props;
  return (
    <div>
      <Button
        sx={{
          textTransform: "none",
          borderRadius: 0,
          "&:hover": {
            borderBottom: `1px solid ${theme.palette.primary.main}`,
            bgcolor: "white",
          },
          fontWeight: "bold",
          ...sx,
        }}
        onClick={onClick}
        size="medium"
        color="navTextColors"
        endIcon={endIcon}
        variant="text"
      >
        Explore
      </Button>
    </div>
  );
}

export default ExploreButton;
