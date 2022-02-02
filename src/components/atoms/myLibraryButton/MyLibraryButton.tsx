import React from "react";
import Button from "@mui/material/Button";
import { BoxProps } from "@mui/material/Box";

interface Props extends BoxProps {}

function MyLibraryButton(props: Props) {
  const { sx } = props;
  return (
    <div>
      <Button
        variant="text"
        sx={{ textTransform: "none", fontWeight: "bold", ...sx }}
        color="navTextColors"
        size="medium"
      >
        My Library
      </Button>
    </div>
  );
}

export default MyLibraryButton;
