import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { createGlobalStyle } from 'styled-components';
import './index.css';

// Create global styles to override any default browser styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    background-color: rgb(37, 38, 39) !important;
    color: white;
    font-family: 'Raleway', sans-serif;
  }
  
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: rgb(37, 38, 39) !important;
  }
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
