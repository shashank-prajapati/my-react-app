import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ReactComponent as EntrepreneurshipIcon } from "../../../media/Vector.svg";
import { ReactComponent as SearchIcon } from "../../../media/searchIcon.svg";

import Icon from "./Icon";

export default {
  title: "atoms/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Entrepreneurship: ComponentStory<typeof Icon> = () => (
  <Icon iconComponent={EntrepreneurshipIcon} />
);
export const Search: ComponentStory<typeof Icon> = () => (
  <Icon iconComponent={SearchIcon} />
);
