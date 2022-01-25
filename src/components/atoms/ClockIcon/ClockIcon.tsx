import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {theme} from '../../../themes/themes'

type Props = {};

function ClockIcon({}: Props) {
  return <div>
      <AccessTimeIcon sx={{color:'extraTextColor.main',display:'block'}} width="20px" height="20px"/>
  </div>;
}

export default ClockIcon;
