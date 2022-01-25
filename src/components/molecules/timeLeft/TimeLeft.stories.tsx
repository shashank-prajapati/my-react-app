import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import TimeLeft from './TimeLeft';

export default {
  title: 'molecules/Time Left',
  component: TimeLeft,
} as ComponentMeta<typeof TimeLeft>;

const Template : ComponentStory<typeof TimeLeft> = (args)=><TimeLeft {...args}></TimeLeft>;

export const Primary = Template.bind({});

Primary.args = {
  time:'13'
}