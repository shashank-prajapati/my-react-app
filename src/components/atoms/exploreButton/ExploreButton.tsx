import React from 'react';
import Button,{ButtonProps} from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BoxProps } from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';

interface Props extends ButtonProps{
  
}

function ExploreButton(props: Props) {
  const {sx,onClick}=props;
  return <div>
      <Button sx={{textTransform:'none',...sx}} onClick={onClick} size='medium' color='navTextColors' endIcon={<ExpandMoreIcon sx={{color:'navTextColors.main'}}/>}>
        Explore 
      </Button>
  </div>;
}

export default ExploreButton;
