import React from 'react';
import { ComponentStory } from "@storybook/react";

import { AtImage } from './index';

export default {
  title: 'Atoms/AtImage',
  component: AtImage,
};

const Template: ComponentStory<typeof AtImage> = (args) => <AtImage {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: 'http://placehold.jp/100x100.png',
  layout: 'fullWidth',
  alt: 'hero image',
  className: 'string',
};
