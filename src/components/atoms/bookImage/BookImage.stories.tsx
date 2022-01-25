import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import coverImage from '../../../media/coverImage.png';
import BookImage from './BookImage';

export default {
  title: 'atoms/Book Image',
  component: BookImage,
} as ComponentMeta<typeof BookImage>;

const Template: ComponentStory<typeof BookImage> = (args) => <BookImage {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
  source:coverImage
}