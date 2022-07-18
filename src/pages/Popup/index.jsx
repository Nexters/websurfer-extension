import React from 'react';
import { render } from 'react-dom';
import theme from '../../styles/theme';
import { Global } from '@emotion/react';
import global from '../../styles/global';
import { ThemeProvider } from '@emotion/react';

import Popup from './Popup';

render(
  <ThemeProvider theme={theme}>
    <Global styles={global} />
    <Popup />
  </ThemeProvider>,
  window.document.querySelector('#app-container')
);

if (module.hot) module.hot.accept();
