import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import BookInfoTabs from './BookInfoTabs';

export default {
  title: 'atoms/Search Button',
  component: BookInfoTabs,
} as ComponentMeta<typeof BookInfoTabs>;

export const Primary: ComponentStory<typeof BookInfoTabs> = () => <BookInfoTabs/>;