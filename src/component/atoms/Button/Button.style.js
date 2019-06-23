import { css } from 'styled-components';

export default css`
  text-align: right;
  .button-field {
    border: none;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    max-width: 100px;
    font-family: ${props => props.theme.fontFamilyPrimaryLight};
    transition: 0.5s ease;
    border: 1px solid transparent;
    padding: 10px;

    &:focus {
      outline: none;
    }

    /* &:hover {
      border: 1px solid black;
    } */
  }
`;
