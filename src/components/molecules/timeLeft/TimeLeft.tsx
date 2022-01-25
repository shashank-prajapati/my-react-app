import React from 'react';
import Typography from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/material/Box';
import ClockIcon from '../../atoms/ClockIcon/ClockIcon';

interface Props extends BoxProps{
  time:string;
}

function TimeLeft(props: Props) {
  const{sx,time,...rest} = props;
return (<div>
        <Box sx={{
            display:'flex',
            alignItems:'center',
            ...sx    
        }}>
            <ClockIcon/>
            <Typography variant='caption3' color='extraTextColor.main' sx={{ml:2}}>{time}-minute read</Typography>
        </Box>       
  </div>);
}

export default TimeLeft;
