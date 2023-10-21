import styled from "styled-components";

export const StyledMovieDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 50px;

  @media (max-width: ${({ theme }) => theme.medium}) {
    /* justify-content: center; */
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
  /* overflow: hidden; */
  width: 90%;
  margin: 0 auto;
`;

export const StyledRelatedMovies = styled.div`
  /* display: flex; */
  margin: 80px;

  /* width: 100vw; */

  h2 {
    text-align: center;
    margin-bottom: 15px;
  }

  #movie {
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

export const StyledMovie = styled.div`
  width: 450px;
  height: 600px;
  background-color: #333;
  border-radius: 10px;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  color: #fff;
  padding-block: 30px;
  text-align: center;
  margin: 10px;

  @media (max-width: ${({ theme }) => theme.small}) {
    width: 80%;
    height: auto;
    margin-inline: auto;
    padding: 10px;
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
    width: 63%;
  }

  @media (max-width: ${({ theme }) => theme.medium}) {
    h2 {
      margin-block: 12px;
      font-size: 22px;
    }
    h3 {
      font-size: 24px;
    }
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    h2 {
      margin-block: 5px;
      font-size: 18px;
    }
    h3 {
      font-size: 16px;
    }
  }
`;
