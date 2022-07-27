import React from 'react';
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AtCloseButton } from './index';

export default {
  title: 'Atoms/AtCloseButton',
  component: AtCloseButton,
};

const Template: ComponentStory<typeof AtCloseButton> = (args) => <AtCloseButton {...args} />;

export const Default = Template.bind({});

Default.args = {
};
