import { Button, ButtonProps } from '@mui/material';
import React from 'react';

interface Props extends ButtonProps{
    btnText?:string;
    isHovered:Boolean;
}

const BookCardButton = (props: Props)=> {
  const {btnText,startIcon,isHovered} = props;
  let backgroundColor = 'white';
  let textColor = 'secondary.main';
  if(isHovered){
      backgroundColor = 'secondary.main';
      textColor = 'white'
  }
  return <div>
      <Button variant="contained" sx={{
          width:'100%',
          color:textColor,
          textTransform:'none',
          bgcolor:backgroundColor,
          '&:hover':{
              color:'white',
              bgcolor:'secondary.main'
          },
          fontWeight:'bold'
      }}
      startIcon={startIcon}
      size='large'>{btnText}</Button>
  </div>;
}

export default BookCardButton;
