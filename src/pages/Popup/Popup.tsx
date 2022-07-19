import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';

const Popup = () => {
  const goApp = () => {
    window.chrome.tabs.create({
      url: window.chrome.runtime.getURL('/options.html'),
    });
  };

  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div className="App">
      <header className="App-header">
        Popup
        <div className="App-link" onClick={goApp}>
          Go App!
        </div>
        <div>Counter State : {count}</div>
      </header>
    </div>
  );
};

export default Popup;
