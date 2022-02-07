import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import BookImage from '../../../media/coverImage.png';
import BookView from "./BookView";

export default {
  title: "molecules/Book View",
  component: BookView,
} as ComponentMeta<typeof BookView>;

const Template: ComponentStory<typeof BookView> = (args) => (
  <BookView {...args}></BookView>
);

export const BeyondEntrepreneurship = Template.bind({});
export const Buttoned = Template.bind({});

BeyondEntrepreneurship.args = {
  time: "13",
  bookAuthor: "Jim Collins & Bill Lazier",
  bookTitle: "Beyond Entrepreneurship",
  bookDesc: "Turning Your Business into an Enduring Great Company",
  coverImage:BookImage
};
