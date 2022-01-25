import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TimeLeft from '../timeLeft/TimeLeft';
import MoreHorizontal from '../../atoms/moreHorizontal/MoreHorizontal';

type Props = {
    time:string;
    bookTitle:string;
    bookAuthor:string;
};

function BookDetails(props: Props) {
    const{bookTitle,bookAuthor,time} = props;
  return <div>
      <Box sx={{
          display:'flex',
          flexDirection:'column',
          flexWrap: 'wrap',
          maxWidth:'282px',
          px:4,
          pt:6,
          pb:2,
          borderLeft:1,
          borderRight:1,
          borderColor:'formBg.main',
          backgroundColor:'white'
      }}>
            <Typography variant="subtitle2" color="navTextColors.main">{bookTitle}</Typography>
            <Typography variant="body1" color="extraTextColor.main" sx={{mt:4}}>{bookAuthor}</Typography>
            <TimeLeft sx={{mt:4}} time={time}/>
            <Box sx={{
                display:'flex',
                mt:2,
                justifyContent:'flex-end'
            }}>
                <MoreHorizontal/>
            </Box>
      </Box>
  </div>;
}

export default BookDetails;
