import React from 'react';
import { StyledButton } from './styles';

export type ButtonProps = {
  title?: string;
  kind?: 'primary' | 'secondary';
  onClick?: () => void;
};

const BooksButton = ({ kind = 'primary', title, onClick }: ButtonProps) => {
  return (
    <StyledButton kind={kind} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

export { BooksButton };
