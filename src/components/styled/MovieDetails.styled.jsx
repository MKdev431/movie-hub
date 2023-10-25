import styled from "styled-components";

export const StyledMovieDetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 50px;
`;

export const StyledMovieDetailsImgWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.medium}) {
    display: flex;
    justify-content: center;
  }
`;

export const StyledMovieDetailsImg = styled.img`
  width: 100%;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: ${({ theme }) => theme.medium}) {
    width: 70%;
  }
`;

export const StyledInfo = styled.div`
  width: 50%;

  @media (max-width: ${({ theme }) => theme.medium}) {
    width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    width: 100%;
  }
`;

export const StyledInfoMovieTitle = styled.h1`
  margin-top: 20px;
  font-size: 80px;
  text-align: center;
  color: #fff;

  @media (max-width: ${({ theme }) => theme.small}) {
    font-size: 32px;
  }
  @media (max-width: ${({ theme }) => theme.medium}) {
    font-size: 38px;
  }
  @media (max-width: ${({ theme }) => theme.small}) {
    font-size: 30px;
  }
`;

export const StyledInfoMovieTagline = styled.h2`
  margin-top: 10px;

  @media (max-width: ${({ theme }) => theme.small}) {
    font-size: 20px;
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

export const StyledRelatedMoviesWrapper = styled.div`
  margin: 80px;

  .movie {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-inline: auto;
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    width: 90%;
    margin: 0 auto 30px;
  }
`;

export const StyledRelatedMoviesTitle = styled.h2`
  margin-bottom: 15px;
  text-align: center;
`;
