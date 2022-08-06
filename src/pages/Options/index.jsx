import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';
import { Global, ThemeProvider } from '@emotion/react';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import theme from '../../styles/theme';
import global from '../../styles/global';

import Options from './Options';

const store = new Store();

store.ready().then(() => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Options title={'Settings'} />
      </ThemeProvider>
    </Provider>,
    window.document.querySelector('#app-container')
  );
});

if (module.hot) module.hot.accept();
