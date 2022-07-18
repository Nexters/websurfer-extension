import React from 'react';
import { render } from 'react-dom';
import theme from '../../styles/theme';
import global from '../../styles/global';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';

import Newtab from './Newtab';

render(
  <ThemeProvider theme={theme}>
    <Global styles={global} />
    <Newtab />
  </ThemeProvider>,
  window.document.querySelector('#app-container')
);

if (module.hot) module.hot.accept();
