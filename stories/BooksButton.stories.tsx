import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BooksButton, ButtonProps } from '../src';

export default {
  title: 'Componentes/BooksButton',
  component: BooksButton,
} as ComponentMeta<typeof BooksButton>;

const Template: ComponentStory<typeof BooksButton> = args => (
  <BooksButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Primary',
} as ButtonProps;

export const Secondary = Template.bind({});

Secondary.args = {
  title: 'Secodnary',
  kind: 'secondary',
} as ButtonProps;
