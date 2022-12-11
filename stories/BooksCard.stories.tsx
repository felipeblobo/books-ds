import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BooksCard, BooksCardProps } from '../src';

export default {
  title: 'Componentes/BooksCard',
  component: BooksCard,
} as ComponentMeta<typeof BooksCard>;

const bookExample: BooksCardProps = {
  title: 'Liderança em Design',
  abstract: 'Habilidades de gestão para alavancar sua carreira',
  author: 'Vitor Zanini',
  price: '29.90',
};

const Template: ComponentStory<typeof BooksCard> = () => (
  <BooksCard {...bookExample} />
);

export const Default = Template.bind({});
