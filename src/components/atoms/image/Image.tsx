import React from "react";

type Props = {
  source: string;
  imgWidth?: string | number;
  imgHeight?: string | number;
};

const Image = (props: Props) => {
  const { source, imgHeight, imgWidth } = props;
  return (
    <img
      style={{ display: "block", width:imgWidth ?? "inherit" , height:imgHeight ?? "inherit" }}
      src={source}
      //height={height ?? "inherit"}
      alt="Book"
      //width={width ?? "inherit"}
    ></img>
  );
};

export default Image;
