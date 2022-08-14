import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Global, ThemeProvider } from '@emotion/react';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { store } from '@redux/store';

import theme from '@styles/theme';
import global from '@styles/global';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import Popup from './Popup';

render(
  <GoogleOAuthProvider clientId="128843431054-i3ihtf1kj9erphakcfrc3umkev39du1t.apps.googleusercontent.com">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Popup />
      </ThemeProvider>
    </Provider>
  </GoogleOAuthProvider>,
  window.document.querySelector('#app-container')
);

if (module.hot) module.hot.accept();
