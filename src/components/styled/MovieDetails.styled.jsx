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

  h2 {
    margin-top: 10px;
  }
`;

export const StyledVoteRuntime = styled.div`
  display: flex;
  justify-content: space-between;
  margin-inline: 30%;
  margin-block: 2%;
`;

export const StyledRelatedMovies = styled.div`
  margin: 80px;

  /* width: 100vw; */

  h2 {
    text-align: center;
    margin-bottom: 15px;
  }

  #movie {
    margin-inline: auto;
  }
`;

export const StyledMovie = styled.div`
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

  @media (max-width: ${({ theme }) => theme.medium}) {
    width: 80%;
    height: auto;
    margin-inline: auto;
  }

  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05, 1.05);
  }

  h3 {
    background-color: transparent;
  }

  img {
    margin-block: 10px;
    width: 65%;
  }
`;
