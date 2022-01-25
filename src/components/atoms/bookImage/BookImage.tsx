import React from 'react';

type Props = {
  source:string;
};

function BookImage(props: Props) {
  const{source} = props;
  return (
      <img style={{display:'block'}} src={source} width='284px' height="287px" alt='Book Cover'></img>);
}

export default BookImage;
