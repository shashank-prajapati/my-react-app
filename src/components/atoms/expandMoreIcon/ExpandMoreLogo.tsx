import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type Props = {};

function ExpandMoreLogo({}: Props) {
  return <div>
      <ExpandMoreIcon sx={{color:'navTextColors.main'}}/>
  </div>;
}

export default ExpandMoreLogo;
