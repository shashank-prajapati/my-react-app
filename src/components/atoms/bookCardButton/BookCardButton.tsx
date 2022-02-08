import { Button, ButtonProps } from "@mui/material";
import React from "react";
import ButtonAtom from "../button/ButtonAtom";
interface Props {
  btnText?: string;
  isHovered?: Boolean;
  startIcon?: React.ReactNode
}
const BookCardButton = (props: Props) => {
  const { btnText, startIcon, isHovered} = props;
  let backgroundColor = "white";
  let textColor = "secondary.main";
  if (isHovered) {
    backgroundColor = "secondary.main";
    textColor = "white";
  }
  return (
    <div>
      <ButtonAtom
        variant="contained"
        width="100%"
        textColor={textColor}
        backgroundColor={backgroundColor}
        hoverTextColor="white"
        hoverBackGroundColor="secondary.main"
        startIcon={startIcon}
        size="large"
      >
        {btnText}
      </ButtonAtom>
    </div>
  );
};
export default BookCardButton;
