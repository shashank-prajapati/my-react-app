import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import MoreHorizontal from './MoreHorizontal';

export default {
  title: 'atoms/More Horizontal Icon',
  component: MoreHorizontal,
} as ComponentMeta<typeof MoreHorizontal>;

export const Primary: ComponentStory<typeof MoreHorizontal> = () => <MoreHorizontal/>;