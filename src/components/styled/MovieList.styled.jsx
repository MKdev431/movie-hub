import styled from "styled-components";

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
