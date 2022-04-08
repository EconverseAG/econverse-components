// stories for Tooltip component

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Accordion from '.';

export default {
  title: 'Accordion',
  component: Accordion,
  decorators: [
    story => (
      <div style={{ width: '300px', margin: '32px auto' }}>{story()}</div>
    ),
  ],
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = args => (
  <Accordion {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </Accordion>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Accordion title',
};
