import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import coverImage from "../../../media/coverImage.png";
import BookAtom from "../button/ButtonAtom";
import AddIcon from "@mui/icons-material/Add";

export default {
  title: "atoms/Button Atom",
  component: BookAtom,
} as ComponentMeta<typeof BookAtom>;

const Template: ComponentStory<typeof BookAtom> = (args) => (
  <BookAtom {...args} />
);

export const TextButton = Template.bind({});
export const IconButton = Template.bind({});

TextButton.args = {
  children: "Add to library",
};

IconButton.args = {
  children: "Add to library",
  startIcon: <AddIcon />,
};
