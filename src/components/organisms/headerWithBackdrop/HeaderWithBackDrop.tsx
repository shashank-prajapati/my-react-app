import { Box, CircularProgress, Modal, Typography } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import React, { useEffect } from 'react';
import ExploreMenu from '../exploreMenu/ExploreMenu';
import Header from '../header/Header'
import TabLayout from '../tabLayout/TabLayout';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


type Props = {
  children?: React.ReactNode;
};

function HeaderWithBackDrop(props: Props) {
  const {children} = props;  
  const [open, setOpen] = React.useState(false);
  const [icon,setIcon] = React.useState(<ExpandMoreIcon sx={{color:'navTextColors.main'}}/>);
  const handleOpen = () => {setOpen(!open);
    if(open){
      setIcon(<ExpandMoreIcon sx={{color:'navTextColors.main'}}/>);
      document.body.style.overflow = 'unset';
    }
    else{
      setIcon(<ExpandLessIcon sx={{color:'navTextColors.main'}}/>);
      document.body.style.overflow = 'hidden';
    }
  };
  const handleClose = () => {setOpen(false);
    document.body.style.overflow = 'unset';
    setIcon(<ExpandMoreIcon sx={{color:'navTextColors.main'}}/>);
  };

  return <div>
      <Header  btnClick={handleOpen} btnIcon={icon}/>
      <Box id="content" sx={{position:'relative'}}>
      <Backdrop
  sx={{ position:'absolute', color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={open}
  onClick={handleClose}
>
    <Box sx={{position:'absolute', top:0}}>
  <ExploreMenu/>
  </Box>
</Backdrop>
    {children}
      </Box>
  </div>;
}

export default HeaderWithBackDrop;
