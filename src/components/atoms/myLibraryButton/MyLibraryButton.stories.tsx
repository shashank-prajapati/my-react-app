import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyLibraryButton from './MyLibraryButton';

export default {
  title: 'atoms/My Library Button',
  component: MyLibraryButton,
} as ComponentMeta<typeof MyLibraryButton>;

export const Primary: ComponentStory<typeof MyLibraryButton> = () => <MyLibraryButton/>;