import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ClockIcon from './ClockIcon';

export default {
  title: 'atoms/Clock Icon',
  component: ClockIcon,
} as ComponentMeta<typeof ClockIcon>;

export const Primary: ComponentStory<typeof ClockIcon> = () => <ClockIcon/>;