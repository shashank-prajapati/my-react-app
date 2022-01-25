import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import coverImage from '../../../media/coverImage.png';

import BookCard from './BookCard';

export default {
  title: 'molecules/Book Card',
  component: BookCard,
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => <BookCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    coverImage:coverImage,
    time:'13',
    bookAuthor:'Jim Collins & Bill Lazier',
    bookTitle:'Beyond Entrepreneurship'
}