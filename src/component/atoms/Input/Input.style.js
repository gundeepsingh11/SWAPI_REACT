import { css } from 'styled-components';

export default css`
  position: relative;
  top: 0;
  width: 100%;
  margin-top: 0;
  transition: all 0.5s;

  .label-field {
    color: ${props => props.theme.yellow};
    font-family: ${props => props.theme.fontFamilyPrimaryLight};
    font-size: 20px;
  }

  .input-field {
    height: 60px;
    width: 100%;
    min-width: 100%;
    padding: 0;
    border-radius: 0;
    line-height: 60px;
    background-color: transparent;
    color: black;
    text-shadow: -1px 0 ${props => props.theme.yellow},
      0 1px ${props => props.theme.yellow}, 1px 0 ${props => props.theme.yellow},
      0 -1px ${props => props.theme.yellow};
    font-size: 30px;
    border: none;
    outline: none;
    border-bottom: 3px solid #b9b6b6;
    font-family: ${props => props.theme.fontFamilyPrimaryLight};

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #808080;
      text-shadow: none;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #000000;
      text-shadow: none;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #000000;
      text-shadow: none;
    }

    &:focus + .line {
      width: 100%;
      transition: 0.5s;
    }
  }
  .line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #000;
  }
`;
