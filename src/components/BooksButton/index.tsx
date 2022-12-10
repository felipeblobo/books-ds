import React from 'react';
import { StyledButton } from './styles';

type ButtonProps = {
  title: string;
};

const BooksButton = ({ title }: ButtonProps) => {
  return <StyledButton>{title}</StyledButton>;
};

export { BooksButton };
