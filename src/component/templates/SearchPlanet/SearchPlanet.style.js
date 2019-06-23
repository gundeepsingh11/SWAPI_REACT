import { css } from 'styled-components';

export default css`
  position: relative;
  height: 100%;

  .card-wrapper {
    display: flex;
    list-style: none;
    padding: 0;
    transition: all 2s;

    li {
      position: relative;
      margin: 5px;
      /* transition: all 0.8s; */
      /* transition: left 8s; */
    }

    .zoom-card {
      transition: all 2s;
      transition: left 0.8s;
      transform: scale(1.5);
      position: absolute;
      left: 0;
      z-index: 9;

      .card-wrapper {
        box-shadow: none;
      }
    }
  }

  input {
    box-shadow: 0 8px 7px -6px black;
  }

  .input-search {
    position: absolute;
    top: 50%;
    width: 100%;
    margin-top: -50px;
  }

  .card-modal {
    p {
      margin-right: 10px;
    }
  }
`;
