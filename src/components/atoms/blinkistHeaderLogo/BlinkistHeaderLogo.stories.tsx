import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import coverImage from '../../../media/coverImage.png';
import BlinkistHeaderLogo from './BlinkistHeaderLogo';

export default {
  title: 'atoms/Blinkist Logo',
  component: BlinkistHeaderLogo,
} as ComponentMeta<typeof BlinkistHeaderLogo>;

const Template: ComponentStory<typeof BlinkistHeaderLogo> = (args) => <BlinkistHeaderLogo {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
    width:'124px',
    height:'26px'
}