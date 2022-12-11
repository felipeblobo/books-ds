import React from 'react';
import { Bag } from '../../icons/Bag';
import { Heart } from '../../icons/Heart';
import { BooksButton } from '../BooksButton';
import {
  About,
  BookInfo,
  Content,
  InteractionContainer,
  Price,
  PriceSection,
  Title,
  Wrapper,
} from './styles';

export type BooksCardProps = {
  title: string;
  abstract: string;
  author: string;
  price: string;
};

const BooksCard = ({ title, abstract, author, price }: BooksCardProps) => {
  const formatedPrice = (price: string) => {
    const stringToNumber = Number(price).toPrecision(4);
    return `R$ ${stringToNumber.replace('.', ',')}`;
  };

  return (
    <Wrapper>
      <Content>
        <About>Sobre o livro:</About>
        <Title>{title}</Title>
        <BookInfo>
          <p>{abstract}</p>
          <p>Por: {author}</p>
        </BookInfo>
        <PriceSection>
          <p>A partir de: </p>
          <Price>{formatedPrice(price)}</Price>
        </PriceSection>
      </Content>
      <InteractionContainer>
        <div>
          <Bag />
          <Heart />
        </div>
        <BooksButton title="Comprar" />
      </InteractionContainer>
    </Wrapper>
  );
};

export { BooksCard };
