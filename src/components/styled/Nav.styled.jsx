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

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const Icon = styled.nav`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  color: #fff;
`;
