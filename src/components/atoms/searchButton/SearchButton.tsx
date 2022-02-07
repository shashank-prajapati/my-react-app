import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { BoxProps } from '@mui/material/Box';
import ButtonAtom from '../button/ButtonAtom';

interface Props extends BoxProps{

};

function SearchButton(props: Props) {
  const {sx}=props;
  return <div>
      <IconButton aria-label='search button' sx={{...sx}}>
          <SearchIcon sx={{color:'navTextColors.main'}} width="24px" height="24px"/>
      </IconButton>
  </div>;
}

export default SearchButton;
