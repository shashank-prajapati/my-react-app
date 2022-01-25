import { Box } from '@mui/material';
import React from 'react';
import blinkistHeaderLogo from '../../../media/blinkistLogo.png';

type Props = {
    width:string;
    height:string;
};

function BlinkistHeaderLogo(props: Props) {
    const {width,height} = props;
  return <div>
      <Box sx={{display:'block'}}>
      <img src={blinkistHeaderLogo} width={width} height={height} alt="Blinkist Logo"/>
      </Box>
  </div>;
}

export default BlinkistHeaderLogo;
