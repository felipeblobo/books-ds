import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BooksButton } from '../src';

export default {
  title: 'Componentes/BooksButton',
  component: BooksButton,
} as ComponentMeta<typeof BooksButton>;

const Template: ComponentStory<typeof BooksButton> = () => (
  <BooksButton title="Primary" />
);

export const Primary = Template.bind({});
