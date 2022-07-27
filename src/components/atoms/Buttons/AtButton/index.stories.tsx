import React from 'react';
import { ComponentStory } from "@storybook/react";

import { AtButton } from './index';

export default {
  title: 'Atoms/AtButton',
  component: AtButton,
};

const Template: ComponentStory<typeof AtButton> = (args) => <AtButton {...args} />;

export const Default = Template.bind({});

Default.decorators = [
  () => {
    return (
      <>
        <h2>ニューモーフィズム</h2>
        <div style={{ backgroundColor: '#EBECF0', display: 'grid', gridAutoRows: '80px', gridTemplateColumns: '200px 200px 200px 200px', padding: '30px 0' }}>
          <div>
            <AtButton {...Default.args} component="btn1" />
          </div>
          <div>
            <AtButton {...Default.args} component="btn2" />
          </div>
          <div>
            <AtButton {...Default.args} component="btn3" />
          </div>
          <div>
            <AtButton {...Default.args} component="btn4" />
          </div>
        </div>
        <h2>普通のボタン</h2>
        <div style={{ display: 'grid', gridAutoRows: '80px', gridTemplateColumns: '200px 200px 200px 200px', padding: '30px 0' }}>
          <div>
            <AtButton {...Default.args} component="btn20" />
          </div>
        </div>
      </>
    );
  },
];

Default.args = {
  borderRadius: '2x',
};
