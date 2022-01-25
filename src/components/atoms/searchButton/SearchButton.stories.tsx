import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchButton from './SearchButton';

export default {
  title: 'atoms/Search Button',
  component: SearchButton,
} as ComponentMeta<typeof SearchButton>;

export const Primary: ComponentStory<typeof SearchButton> = () => <SearchButton/>;