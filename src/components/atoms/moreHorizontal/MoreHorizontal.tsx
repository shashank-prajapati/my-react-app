import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {theme} from '../../../themes/themes'


type Props = {};

function MoreHorizontal({}: Props) {
  return <MoreHorizIcon sx={{fill:theme.palette.iconsColor.main, diplay:'block'}} width="18px" height="4px"/>;
}

export default MoreHorizontal;
