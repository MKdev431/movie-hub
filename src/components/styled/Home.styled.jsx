import styled from "styled-components";

export const StyledHome = styled.div`
  width: 100%;
  /* height: 95vh; */
  background-color: #676;

  h1 {
    text-align: center;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  /* gap: 20px; */
  /* width: 200px; */
  /* height: 300px; */
  background-color: #c6c6c6;
`;

export const StyledMovie = styled.div`
  /* width: 200px; */
  /* height: 300px; */
  background-color: #333;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  color: #fff;
  padding: 10px;
  text-align: center;
  margin: 10px;

  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05, 1.05);
  }

  h3 {
    background-color: transparent;
  }

  img {
  }
`;
