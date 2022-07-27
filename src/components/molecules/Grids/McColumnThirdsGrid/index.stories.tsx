import React from 'react';
import { ComponentStory } from "@storybook/react";

import { McColumnThirdsGrid } from './index';

export default {
  title: 'Atoms/McColumnThirdsGrid',
  component: McColumnThirdsGrid,
};

const Template: ComponentStory<typeof McColumnThirdsGrid> = (args) => <McColumnThirdsGrid {...args} />;

export const Default = Template.bind({});
