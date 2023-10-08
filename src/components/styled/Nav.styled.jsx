import styled from "styled-components";

export const StyledNav = styled.nav`
  /* width: 100%; */
  height: 100vh;
  flex-basis: 15%;
  background-color: #333;
  /* overflow-y: scroll; */
  ul {
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 4%;
  }

  li {
    /* flex-basis: 20%; */
    padding: 10px 30px;
    list-style: none;
    text-align: center;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;
