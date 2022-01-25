import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ReactComponent as EntrepreneurshipIcon} from '../../../media/Vector.svg';
import ExploreMenuIcons from './ExploreMenuIcons';

export default {
  title: 'atoms/Explore Menu Icons',
  component: ExploreMenuIcons,
} as ComponentMeta<typeof ExploreMenuIcons>;

export const Primary: ComponentStory<typeof ExploreMenuIcons> = () => <ExploreMenuIcons iconComponent={EntrepreneurshipIcon}/>;