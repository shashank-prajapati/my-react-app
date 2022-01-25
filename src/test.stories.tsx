import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ReactComponent as EntrepreneurshipIcon} from '../../../media/Vector.svg';
import Text from './test';

export default {
  title: 'atoms/Test',
  component: Text,
} as ComponentMeta<typeof Text>;

export const Primary: ComponentStory<typeof Text> = () => <Text />;