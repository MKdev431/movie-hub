import styled from "styled-components";

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  padding-top: 20px;
  background-color: #222;
  z-index: 2;

  li {
    padding: 10px 30px;
    list-style: none;
    text-align: center;
  }

  li:first-child {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: ${({ theme }) => theme.medium}) {
    li {
      padding: 6px 26px;
      font-size: 14px;
    }

    li:first-child {
      margin-top: 10px;
      font-size: 18px;
    }
  }
`;

export const Icon = styled.nav`
  position: fixed;
  top: 10px;
  left: 10px;
  font-size: 30px;
  cursor: pointer;
  color: #fff;
  z-index: 3;
`;
