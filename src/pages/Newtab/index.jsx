import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from '../../redux/store';

import Newtab from './Newtab';

render(
  <Provider store={store}>
    <Newtab />
  </Provider>,
  window.document.querySelector('#app-container')
);

if (module.hot) module.hot.accept();
