import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import coverImage from "../../../media/coverImage.png";
import blinkistHeaderLogo from "../../../media/blinkistLogo.png";
import ReadingImg from "../../../media/readingImage.png";
import Image from "./Image";

export default {
  title: "atoms/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const CoverImage = Template.bind({});
export const BlinkistLogo = Template.bind({});
export const BannerImage = Template.bind({});

CoverImage.args = {
  source: coverImage,
};

BlinkistLogo.args = {
  source: blinkistHeaderLogo,
  //width: "124px",
  //height: "26px",
};

BannerImage.args = {
  source: ReadingImg,
};
