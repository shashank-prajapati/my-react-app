import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import ReadingImage from '../../atoms/readingImage/ReadingImage';

type Props = {};

const ExploreBookBanner = ({}: Props)=> {
  return <Paper sx={{
      bgcolor:'footerBgColor.main',
      px:9,
      py:4
  }}>
      <Grid container>
        <Grid item sm={6} sx={{py:9}}>
            <Grid container rowSpacing={4}>
                <Grid item sm={12}>
                    <Typography variant='heading' color='navTextColors.main'>Explore Books on entrepreneurship</Typography>
                </Grid>
                <Grid item sm={12}>
                    <Typography variant='subtitle2' color='extraTextColor.main'>Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item sm={6} sx={{
            display:'flex',
            justifyContent:'center'
        }}>
            <ReadingImage/>
        </Grid>
      </Grid>
  </Paper>;
}

export default ExploreBookBanner;
