import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ReadingImage from './ReadingImage';

export default {
  title: 'atoms/Reading Image',
  component: ReadingImage,
} as ComponentMeta<typeof ReadingImage>;

export const Primary: ComponentStory<typeof ReadingImage> = () => <ReadingImage/>;