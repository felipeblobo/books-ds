import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 34rem;
  height: 24rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 3rem 2rem 3rem 3rem;
  display: grid;
  grid-template-columns: auto 1fr;

  svg:first-of-type {
    padding-right: 1rem;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 45rem;
    height: 16rem;
  }

  @media (max-width: 480px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 24rem;
    height: 18rem;
    padding: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const About = styled.h3`
  color: #eb9b00;
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Title = styled.h4`
  color: #002f52;
  font-weight: 700;
  font-size: 1.125rem;

  @media (max-width: 480px) {
    margin-top: 1rem;
  }
`;

export const PriceSection = styled.div`
  p:first-of-type {
    font-size: 0.8rem;
    opacity: 0.5;
  }

  @media (max-width: 480px) {
    display: flex;
    align-items: center;

    p:first-of-type {
      margin-right: 0.5rem;
      font-size: 1rem;
    }
  }
`;

export const Price = styled.p`
  color: #002f52;
  font-size: 2rem;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const BookInfo = styled.div`
  p:first-of-type {
    padding-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin: 1rem 0;
  }
`;

export const InteractionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;

    div:first-of-type {
      padding: 0 1rem;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    div:first-of-type {
      margin-top: 2rem;
    }

    svg {
      margin-right: 1rem;
      transform: scale(1.5);
    }

    svg:first-of-type {
      margin-right: 1rem;
    }
  }
`;
