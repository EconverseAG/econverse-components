// stories for Tooltip component

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tooltip from '.';

export default {
  title: 'Tooltip',
  component: Tooltip,
  decorators: [
    story => (
      <div style={{ width: '300px', margin: '32px auto' }}>{story()}</div>
    ),
  ],
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = args => (
  <Tooltip {...args}>
    <button type="button">Hover me</button>
  </Tooltip>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Tooltip example',
};
