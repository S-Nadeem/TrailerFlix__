import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const StyledMovieInfo = styled.div`
  background: ${props =>
    props.backdrop
      ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')`
      : '#000'};
  background-size: cover !important;
  background-position: center !important;
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
  animation: animateMovieinfo 1s;

  .movieinfo-content {
    max-width: 1280px;
    min-height: 500px;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.7);
    border-radius: 20px;
    position: relative;
  }

  .movieinfo-thumb {
    width: 300px;
  margin-top: 25px;
    float: left;
    padding-left: 10px;

    @media screen and (max-width: 768px) {
      width: 93% !important;
    }
  }

  .movieinfo-text {
    font-family: Arial, Helvetica, sans-serif;
    padding: 40px;
    color: #fff;
    overflow: hidden;

    h1 {
      font-family: 'Abel', sans-serif;
      font-size: 48px;
      margin: 0;

      @media screen and (max-width: 1000px) {
        font-size: 32px !important;
      }
    }

    h3 {
      font-size: 16px;
      line-height: 0;
      margin-top: 30px;
    }

    p {
      font-family: 'Abel', sans-serif;
      font-size: 18px;
      line-height: 26px;
    }
  }

  .rating-director {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 25px;
    margin: 0px 0 0 0;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  .play-stop-button {
    background: #e50914;
    line-height: normal;
    font-weight: 400; 
    width: 3rem;
    min-width: 170px;
    height: 60px;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
    font-family: sans-serif;
    border-radius: 6px;
    font-size: 20px;
    max-width: 1280px;
    display: block;
    margin: 20px auto;
    padding: 0 20px;
    outline: none;
    box-shadow: 0 1px 0 rgba(0,0,0,.45);
    -webkit-font-smoothing: antialiased;

  :hover {
    opacity: 0.8;
  }
  }

  @media screen and (max-width: 768px) {
    min-height: 600px;
    height: auto;
  }

  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
