import { createGlobalStyle } from 'styled-components';
import { FONT_FAMILY, COLORS } from './variables';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  html * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: ${FONT_FAMILY.ARIAL};
    background-color: ${COLORS.BLACK}
  }
`;
