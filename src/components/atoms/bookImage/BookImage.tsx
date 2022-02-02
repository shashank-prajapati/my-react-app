import React from "react";

type Props = {
  source: string;
  width?: string | number | undefined
};

function BookImage(props: Props) {
  const { source,width } = props;
  return (
    <img
      style={{ display: "block" }}
      src={source}
      width={width}
      alt="Book Cover"
    ></img>
  );
}

export default BookImage;
