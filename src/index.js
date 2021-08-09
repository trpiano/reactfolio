import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App/App';

import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme"

import './index.scss';

ReactDOM.render(
  <ThemeProvider theme={theme}>
      <App />
  </ThemeProvider>,
  document.getElementById('root')
);
