import React from "react";
import SvgIcon,{SvgIconProps} from "@mui/material/SvgIcon";
interface Props{
  iconComponent: React.ElementType<any>;
  color?: string;
  width?:string;
  height?:string;
  ml?:string|number;
};
function Icon(props: Props) {
  const { iconComponent, color , width,height,ml} = props;
  return (
    <SvgIcon
      component={iconComponent}
      sx={{ color: color, width: width ?? "24px", height: height ?? "24px", ml:ml }}
      inheritViewBox
    />
  );
}
export default Icon;