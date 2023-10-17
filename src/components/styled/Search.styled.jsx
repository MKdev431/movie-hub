import styled from "styled-components";

export const StyledSearch = styled.div`
  width: 40%;
  margin: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  border: none;
  font-size: 28px;
  font-weight: 500;
  width: 100%;
  outline: none;
  color: #ffffff;
  background-color: #333;
  text-align: center;
  &::placeholder {
    color: #a1a1a1;
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    font-size: 14px;
  }
`;
