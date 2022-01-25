import { Box, Divider, Grid, MenuList, Paper, Typography } from '@mui/material';
import React from 'react';
import ExploreMenuButton from '../../molecules/exploreMenuButton/ExploreMenuButton';
import {ReactComponent as EntrepreneurshipIcon} from '../../../media/Vector.svg';
import {ReactComponent as CareerSuccess} from '../../../media/CareerSuccess.svg';
import {ReactComponent as CommunicationSkills} from '../../../media/Communication Skills.svg';
import {ReactComponent as CorporateCulture} from '../../../media/Corporate Culture.svg';
import {ReactComponent as Economics} from '../../../media/Economics.svg';
import {ReactComponent as Education} from '../../../media/Education.svg';
import {ReactComponent as HealthNutrition} from '../../../media/Health & Nutrition.svg';
import {ReactComponent as History} from '../../../media/History.svg';
import {ReactComponent as MarketingSales} from '../../../media/Marketing & Sales.svg';
import {ReactComponent as MoneyInvestments} from '../../../media/Money & Investments.svg';
import {ReactComponent as Motivation} from '../../../media/Motivation & Inspiration.svg';
import {ReactComponent as Nature} from '../../../media/Nature & Environment.svg';
import {ReactComponent as PersonalDevelopment} from '../../../media/Personal Development.svg';
import {ReactComponent as Politics} from '../../../media/Politics.svg';
import {ReactComponent as Productivity} from '../../../media/Productivity.svg';
import {ReactComponent as Relationship} from '../../../media/SexRelationship.svg';
import {ReactComponent as Science} from '../../../media/Science.svg';
import {ReactComponent as Psycology} from '../../../media/Psychology.svg';


const menuData = [{
    id:1,
    iconComponent:EntrepreneurshipIcon,
    buttonText:'Entrepreneurship'
},{
    id:2,
    iconComponent:Politics,
    buttonText:'Politics'
},{
    id:3,
    iconComponent:MarketingSales,
    buttonText:'Marketing & Sales'
},{
    id:4,
    iconComponent:Science,
    buttonText:'Science'
},{
    id:5,
    iconComponent:HealthNutrition,
    buttonText:'Health & Nutrition'
},{
    id:6,
    iconComponent:PersonalDevelopment,
    buttonText:'Personal Development'
},{
    id:7,
    iconComponent:Economics,
    buttonText:'Economics'
},{
    id:8,
    iconComponent:History,
    buttonText:'History'
},{
    id:9,
    iconComponent:CommunicationSkills,
    buttonText:'Communication Skills'
},{
    id:10,
    iconComponent:CorporateCulture,
    buttonText:'CorporateCulture'
},{
    id:11,
    iconComponent:Motivation,
    buttonText:'Motivation & Inspiration'
},{
    id:12,
    iconComponent:MoneyInvestments,
    buttonText:'Money & Investments'
},{
    id:13,
    iconComponent:Psycology,
    buttonText:'Psychology'
},{
    id:14,
    iconComponent:Productivity,
    buttonText:'Productivity'
},{
    id:16,
    iconComponent:Relationship,
    buttonText:'Sex & Relationship'
},{
    id:16,
    iconComponent:Nature,
    buttonText:'Nature & Environment'
},{
    id:17,
    iconComponent:CareerSuccess,
    buttonText:'Career & Success'
},{
    id:18,
    iconComponent:Education,
    buttonText:'Education'
},
]

const menuList = menuData.map(menuItem => (<Grid item xs={4}><ExploreMenuButton key={menuItem.id} iconComponent={menuItem.iconComponent} buttonText={menuItem.buttonText}/></Grid>))

type Props = {};

function ExploreMenu({}: Props) {
  return <Paper sx={{
      bgcolor:'footerBgColor.main',
      px:'250px',
      py:'30px'
      }} elevation={0}>
      <Box sx={{
          display:'flex',
          justifyContent:'space-between'
      }}>
          <Typography variant='subtitle3' color='secondary.main'>Explore by category</Typography>
          <Typography variant='subtitle3' color='extraTextColor.main'>See recently added titles</Typography>
          <Typography variant='subtitle3' color='extraTextColor.main'>See popular titles</Typography>
      </Box>
      <Divider sx={{my:2}}/>
      <MenuList>
          <Grid container columnSpacing={25} rowSpacing={6}>
            {menuList}
          </Grid>
      </MenuList>
  </Paper>;
}

export default ExploreMenu;
