import { createGlobalStyle } from 'styled-components';
import globalStyles from './globalStyles';

// eslint-disable-next-line no-unused-expressions
const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;

export default GlobalStyle;
