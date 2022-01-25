import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import coverImage from '../../../media/coverImage.png';

import AvatarButton from './AvatarButton';

export default {
  title: 'molecules/Avatar Button',
  component: AvatarButton,
} as ComponentMeta<typeof AvatarButton>;

const Template: ComponentStory<typeof AvatarButton> = (args) => <AvatarButton {...args} />;

export const Primary = Template.bind({});