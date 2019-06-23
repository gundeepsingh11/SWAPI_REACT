import { css } from 'styled-components';

export default css`
  position: relative;
  height: 100%;

  .card-wrapper {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      position: relative;
      margin: 5px;
      transition: all 0.8s;
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

  .zoom-card {
    transition: all 2s;
    transform: scale(1.5);
    z-index: 9;

    .card-wrapper {
      box-shadow: none;
    }
  }
  .card-modal {
    p {
      margin-right: 10px;
    }
  }
`;
