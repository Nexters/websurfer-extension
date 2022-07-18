import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from '../../redux/store';
import theme from '../../styles/theme';
import global from '../../styles/global';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';

import Newtab from './Newtab';

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Newtab />
    </ThemeProvider>
  </Provider>,
  window.document.querySelector('#app-container')
);

if (module.hot) module.hot.accept();
