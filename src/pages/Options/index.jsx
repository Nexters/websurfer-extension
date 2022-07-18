import React from 'react';
import { render } from 'react-dom';
import theme from '../../styles/theme';
import { Global } from '@emotion/react';
import global from '../../styles/global';
import { ThemeProvider } from '@emotion/react';

import Options from './Options';

render(
  <ThemeProvider theme={theme}>
    <Global styles={global} />
    <Options title={'Settings'} />
  </ThemeProvider>,
  window.document.querySelector('#app-container')
);

if (module.hot) module.hot.accept();
