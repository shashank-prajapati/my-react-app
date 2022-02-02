import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ExploreBookBanner from './ExploreBookBanner';
import { Box } from '@mui/material';

export default {
  title: 'molecules/Explore Books Banner',
  component: ExploreBookBanner,
} as ComponentMeta<typeof ExploreBookBanner>;

export const Banner : ComponentStory<typeof ExploreBookBanner> = ()=><Box sx={{px:'250px'}}><ExploreBookBanner/></Box>
