import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccountAvatar from './AccountAvatar';

export default {
  title: 'atoms/Account Avatar',
  component: AccountAvatar,
} as ComponentMeta<typeof AccountAvatar>;

const Template: ComponentStory<typeof AccountAvatar> = (args) => <AccountAvatar initials='A' />;

export const Primary = Template.bind({});
