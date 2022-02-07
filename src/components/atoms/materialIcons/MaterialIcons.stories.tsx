import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import coverImage from "../../../media/coverImage.png";
import blinkistHeaderLogo from "../../../media/blinkistLogo.png";
import ReadingImg from "../../../media/readingImage.png";
import MaterialIcons from "./MaterialIcons";

export default {
  title: "atoms/Material Icons",
  component: MaterialIcons,
} as ComponentMeta<typeof MaterialIcons>;

const Template: ComponentStory<typeof MaterialIcons> = (args) => <MaterialIcons {...args} />;

export const CoverImage = Template.bind({});
export const BlinkistLogo = Template.bind({});
export const BannerImage = Template.bind({});
