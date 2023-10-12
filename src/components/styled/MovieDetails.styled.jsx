import styled from "styled-components";

export const StyledMovieDetails = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: space-around;
  /* flex-basis: 100%; */
  /* gap: 2%; */
  margin: 50px;
`;

export const StyledImg = styled.div`
  /* width: 50%; */
  /* height: 30vh; */

  img {
    width: 100%;
    /* width: 30%; */
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const StyledInfo = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  width: 50%;
`;

export const StyledVoteRuntime = styled.div`
  display: flex;
  justify-content: space-between;
  margin-inline: 30%;
  margin-block: 2%;
`;
