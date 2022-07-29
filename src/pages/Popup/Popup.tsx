import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './Popup.styled';

import { RootState } from '../../redux/store';

const Popup = () => {
  const goApp = () => {
    window.chrome.tabs.create({
      url: window.chrome.runtime.getURL('/options.html'),
    });
  };

  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <S.Wrapper>
      <header className="App-header">
        Popup
        <div className="App-link" onClick={goApp}>
          Go App!
        </div>
        <div>Counter State : {count}</div>
      </header>
    </S.Wrapper>
  );
};

export default Popup;
