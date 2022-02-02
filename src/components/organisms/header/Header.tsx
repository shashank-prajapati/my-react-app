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
import Modal from '@mui/material/Modal';
import { useNavigate } from "react-router-dom";


type Props = {
  btnClick?:React.MouseEventHandler<HTMLButtonElement>;
  btnIcon?:React.ReactNode;
};

function Header(props: Props) {
  const {btnClick,btnIcon} = props;
  const navigate = useNavigate();
  const gotoMyLibrary = ()=>{
    navigate('/');
  };

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
        <ExploreButton sx={{ml:10}} onClick={btnClick} endIcon={btnIcon}/>
        <MyLibraryButton sx={{ml:10}} onClick={gotoMyLibrary}/>
      </Box >
      <Box sx={{
          display:'flex',
          alignItems:'center'}}>
        <AvatarButton/>
      </Box>
      </Box>
      </div>;
}

export default Header;
