import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ExpandMoreLogo from './ExpandMoreLogo';

export default {
  title: 'atoms/Expand More Icon',
  component: ExpandMoreLogo,
} as ComponentMeta<typeof ExpandMoreLogo>;

export const Primary: ComponentStory<typeof ExpandMoreLogo> = () => <ExpandMoreLogo/>;