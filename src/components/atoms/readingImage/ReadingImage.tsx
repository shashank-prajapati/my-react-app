import { Box, Paper } from '@mui/material';
import React from 'react';
import ReadingImg from '../../../media/readingImage.png'

type Props = {};

const ReadingImage = ({}: Props)=> {
  return <Box sx={{display:'block'}}>
  <img src={ReadingImg} alt="A girl is reading book"/>
  </Box>
}
export default ReadingImage;

