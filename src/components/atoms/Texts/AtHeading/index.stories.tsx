import React from 'react';
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AtHeading } from './index';

export default {
  title: 'Atoms/Texts/AtHeading',
  component: AtHeading,
} as ComponentMeta<typeof AtHeading>;;

const Template: ComponentStory<typeof AtHeading> = (args) => <AtHeading {...args} />;

export const Default = Template.bind({});
Default.args = {
  Tag: 'h1',
  children: 'This is a pen',
};
