import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/colors';
import { TYPOGRAPHY } from '../constants/typography';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    background-color: ${COLORS.PRIMARY_BACKGROUND} !important;
    color: white;
    font-family: ${TYPOGRAPHY.FONTS.BODY};
  }
  
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: ${COLORS.PRIMARY_BACKGROUND} !important;
  }
`; 