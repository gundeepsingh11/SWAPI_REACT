import { css } from 'styled-components';

export default css`
  height: 100%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background-image: url('../static/img/pattern-2.jpg');
    background-attachment: fixed !important;
    -webkit-background-size: cover !important;
    background-size: cover !important;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.4;
  }

  form {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }

  img {
    max-width: 120px;
  }
`;
