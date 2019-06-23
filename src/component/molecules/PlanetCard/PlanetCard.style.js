import { css } from 'styled-components';

export default css`
  &.card-wrapper {
    width: 100%;
    height: 200px;
    margin: auto;

    background: url('/static/img/package.jpg');
    background-position: center;
    background-color: black;
    background-size: cover;
    cursor: pointer;

    /* -webkit-box-shadow: 0 0 5px #000;
    box-shadow: 0 0 5px #000; */
    overflow: hidden;
    position: relative;

    /* &:before {
    position: absolute;
    margin: -2rem;
    z-index: 999;

    left: calc(100% - 2rem + .25*2rem);
    bottom: 0;
    border-radius: 50%;
    box-shadow: 0 0 7px #b53;
    background: #ecb208;
    content: '';
  } */

    &:hover {
      .overlay {
        opacity: 1;
        & .title {
          transform: translateY(0px);
        }

        & hr {
          width: 75px;
          transition-delay: 0.4s;
        }

        & .see-more {
          transform: translateY(0px);
          transition-delay: 0.3s;
          opacity: 1;
        }
      }
    }
  }

  .overlay {
    width: 100%;
    height: 100%;
    /* display: flex; */
    position: relative;
    background: rgba(77, 77, 77, 0.9);
    color: ${props => props.theme.yellow};
    /* opacity: 0; */
    transition: all 0.5s;
  }

  .items {
    padding-left: 20px;
    letter-spacing: 3px;
  }

  .title {
    font-size: 30px;
    line-height: 40px;
    z-index: 10;

    transform: translateY(40px);
    transition: all 0.7s;
    hr {
      display: block;
      width: 0;

      border: none;
      border-bottom: solid 2px #fef5df;

      position: absolute;
      bottom: 0;
      left: 20px;

      transition: all 0.5s;
    }
  }

  .see-more {
    font-size: 12px;
    opacity: 0;
    letter-spacing: 1px;
    font-family: 'Lato', sans-serif;
    transform: translateY(40px);
    transition: all 0.7s;

    span {
      margin-left: 10px;
    }
  }
`;
