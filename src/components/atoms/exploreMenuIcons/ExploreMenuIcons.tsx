import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { pink } from '@mui/material/colors';

type Props = {
    iconComponent:React.ElementType<any>;
};

function ExploreMenuIcons(props: Props) {
  const {iconComponent} = props
  return <SvgIcon component={iconComponent} sx={{ color: 'iconsColor.main'}} inheritViewBox/>;
}

export default ExploreMenuIcons;
