import styled from "styled-components";

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledTitle = styled.h1`
  margin-top: 20px;
  text-align: center;
  font-size: 80px;
  color: #fff;
  font-family: "Lobster", cursive;

  @media (max-width: ${({ theme }) => theme.small}) {
    font-size: 32px;
  }
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: ${({ theme }) => theme.large}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
  }

  @media (max-width: ${({ theme }) => theme.medium}) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;
