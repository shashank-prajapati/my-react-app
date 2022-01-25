import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ExploreButton from './ExploreButton';

export default {
  title: 'atoms/Explore Button',
  component: ExploreButton,
} as ComponentMeta<typeof ExploreButton>;

export const Primary: ComponentStory<typeof ExploreButton> = () => <ExploreButton/>;