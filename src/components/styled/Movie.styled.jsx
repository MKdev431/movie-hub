import styled from "styled-components";

export const StyledMovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 490px;
  height: 700px;
  padding-block: 30px;
  margin: 10px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  border-radius: 10px;
  background-color: #333;
  color: #fff;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05, 1.05);
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    width: 80%;
    height: auto;
    margin-inline: auto;
    padding: 10px;
  }
`;

export const StyledMovieTitle = styled.h2`
  margin-block: 8px;

  @media (max-width: ${({ theme }) => theme.medium}) {
    margin-block: 12px;
    font-size: 22px;
  }
`;

export const StyledMovieDate = styled.h3`
  background-color: transparent;

  @media (max-width: ${({ theme }) => theme.medium}) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    font-size: 16px;
  }
`;

export const StyledMovieImg = styled.img`
  width: 63%;
  margin-block: 10px;
`;

export const StyledWatchlistAddButton = styled.button`
  width: 50%;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  color: #fff;
  background-color: green;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.small}) {
    width: 90%;
  }
`;

export const StyledWatchlistRemoveButton = styled.button`
  width: 50%;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  color: #fff;
  background-color: red;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.small}) {
    width: 90%;
  }
`;
