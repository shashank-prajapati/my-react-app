import React, { useState } from 'react';
import BlinkistHeaderLogo from '../../atoms/blinkistHeaderLogo/BlinkistHeaderLogo';
import Box, { BoxProps } from '@mui/material/Box';
import SearchButton from '../../atoms/searchButton/SearchButton';
import ExploreButton from '../../atoms/exploreButton/ExploreButton';
import AvatarButton from '../../molecules/avatarButton/AvatarButton';
import MyLibraryButton from '../../atoms/myLibraryButton/MyLibraryButton';
import Popover from '@mui/material/Popover';
import ExploreMenu from '../exploreMenu/ExploreMenu';
import { red } from '@mui/material/colors';

type Props = {};

function Header({}: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = ()=>setAnchorEl(null);

  return <div>
  <Box sx={{
          display:'flex',
          alignItems:'center',
          px:'250px',
          py:'30px',
          justifyContent:'space-between',
          flexDirection:'row'
      }}>
      <Box sx={{
          display:'flex',
          alignItems:'center'
      }}>
        <BlinkistHeaderLogo height='26px' width='124px'/>
        <SearchButton sx={{ml:10}}/>
        <ExploreButton sx={{ml:10}} onClick={handleClick}/>
        <MyLibraryButton sx={{ml:10}}/>
      </Box >
      <Box sx={{
          display:'flex',
          alignItems:'center'}}>
        <AvatarButton/>
      </Box>
      </Box>
      <Popover
        anchorReference="anchorPosition"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        anchorPosition={{ top: 100, left:0}}
      >
        <ExploreMenu/>
      </Popover>
      </div>;
}

export default Header;
