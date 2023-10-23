import styled from "styled-components";

export const StyledMovie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 490px;
  height: 700px;
  background-color: #333;
  border-radius: 10px;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  color: #fff;
  padding-block: 30px;
  text-align: center;
  margin: 10px;

  @media (max-width: ${({ theme }) => theme.small}) {
    width: 80%;
    height: auto;
    margin-inline: auto;
    padding: 10px;
  }

  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05, 1.05);
  }

  h3 {
    background-color: transparent;
  }

  img {
    margin-block: 10px;
    width: 63%;
  }

  @media (max-width: ${({ theme }) => theme.medium}) {
    h2 {
      margin-block: 12px;
      font-size: 22px;
    }
    h3 {
      font-size: 24px;
    }
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    h2 {
      margin-block: 5px;
      font-size: 18px;
    }
    h3 {
      font-size: 16px;
    }
  }
`;
