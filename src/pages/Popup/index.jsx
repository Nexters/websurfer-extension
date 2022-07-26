import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';
import { Global, ThemeProvider } from '@emotion/react';

import theme from '../../styles/theme';
import global from '../../styles/global';

import Popup from './Popup';

const store = new Store();

store.ready().then(() => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Popup />
      </ThemeProvider>
    </Provider>,
    window.document.querySelector('#app-container')
  );
});

if (module.hot) module.hot.accept();
