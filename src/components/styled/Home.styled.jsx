import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: 95vh; */

  h1 {
    color: #fff;
    font-size: 80px;
    margin-top: 20px;
    font-family: "Lobster", cursive;
  }
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const StyledMovie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;
  height: 600px;
  background-color: #333;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  color: #fff;
  padding-block: 30px;
  text-align: center;
  margin: 10px;

  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05, 1.05);
  }

  h2 {
    margin-top: 5px;
  }

  h3 {
    background-color: transparent;
  }

  img {
    margin-block: 10px;
    width: 65%;
  }
`;
