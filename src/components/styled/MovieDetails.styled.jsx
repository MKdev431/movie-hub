import styled from "styled-components";

export const StyledMovieDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 50px;
`;

export const StyledImg = styled.div`
  img {
    width: 100%;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const StyledInfo = styled.div`
  width: 50%;
`;

export const StyledVoteRuntime = styled.div`
  display: flex;
  justify-content: space-between;
  margin-inline: 30%;
  margin-block: 2%;
`;
