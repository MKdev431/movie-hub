import styled from "styled-components";

export const StyledMovieDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 50px;

  @media (max-width: ${({ theme }) => theme.medium}) {
  }
`;

export const StyledImg = styled.div`
  img {
    width: 100%;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: ${({ theme }) => theme.medium}) {
    display: flex;
    justify-content: center;
    img {
      width: 70%;
    }
  }
`;

export const StyledInfo = styled.div`
  width: 50%;

  h2 {
    margin-top: 10px;
  }

  @media (max-width: ${({ theme }) => theme.medium}) {
    width: 80%;

    h1 {
      font-size: 38px;
    }
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    width: 100%;

    h1 {
      font-size: 26px;
    }
  }
`;

export const StyledVoteRuntime = styled.div`
  display: flex;
  justify-content: space-between;
  margin-inline: 30%;
  margin-block: 2%;

  @media (max-width: ${({ theme }) => theme.small}) {
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
  }
`;

export const StyledTrailer = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;

export const StyledRelatedMovies = styled.div`
  margin: 80px;

  h2 {
    text-align: center;
    margin-bottom: 15px;
  }

  .movie {
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    width: 90%;
    margin: 0 auto 30px;
  }
`;
