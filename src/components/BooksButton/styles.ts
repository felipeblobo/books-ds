import { ButtonProps } from './index';
import styled, { css } from 'styled-components';

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ kind }) => (kind === 'primary' ? '#eb9b00' : '#fff')};
  padding: 1rem 1.5rem;
  border: 2px solid #eb9b00;
  color: ${({ kind }) => (kind === 'primary' ? '#fff' : '#eb9b00')};
  font-size: 1.25rem;
  cursor: pointer;
  transition: 0.5s;

  ${({ kind }) =>
    kind === 'primary'
      ? css`
          &:hover {
            background-color: #b87900;
            border: 2px solid #b87900;
          }
        `
      : css`
          &:hover {
            background-color: #fff;
            border: 2px solid #b87900;
            color: #b87900;
          }
        `}
`;
