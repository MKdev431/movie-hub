import styled from "styled-components";

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  padding-top: 20px;
  background-color: #333;

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
