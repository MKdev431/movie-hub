import styled from "styled-components";

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  padding-top: 20px;
  padding-left: 20px;
  z-index: 2;
  background-color: #222;

  a {
    color: #fff;
    text-decoration: none;

    &.active {
      color: gold;
    }
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    padding-left: 0;
  }
`;

export const StyledNavItem = styled.li`
  padding: 10px 30px;
  text-align: center;
  list-style: none;

  &:first-child {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
  }

  @media (max-width: ${({ theme }) => theme.medium}) {
    padding: 6px 26px;
    font-size: 14px;

    &:first-child {
      margin-top: 10px;
      font-size: 18px;
    }
  }
`;

export const IconButton = styled.button`
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 3;
  border: none;
  font-size: 40px;
  background-color: transparent;
  cursor: pointer;

  & > * {
    border-radius: 10px;
    background-color: #fff;
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    font-size: 28px;
  }
`;
