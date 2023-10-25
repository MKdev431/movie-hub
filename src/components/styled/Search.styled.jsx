import styled from "styled-components";

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin: 40px;
  padding: 20px 30px;
  border-radius: 50px;
  background-color: #333;
  box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;

  @media (max-width: ${({ theme }) => theme.small}) {
    width: 60%;
    margin: 25px;
    padding: 8px 15px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  text-align: center;
  font-size: 28px;
  font-weight: 500;
  color: #ffffff;
  background-color: #333;
  &::placeholder {
    color: #a1a1a1;
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    font-size: 14px;
  }
`;

export const StyledSearchIcon = styled.div`
  font-size: 26px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.small}) {
    font-size: 16px;
  }
`;

export const StyledDeleteIcon = styled.div`
  margin-right: 8px;
  font-size: 34px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.small}) {
    font-size: 24px;
  }
`;
