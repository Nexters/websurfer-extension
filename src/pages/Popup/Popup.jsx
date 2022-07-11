import React from 'react';

const Popup = () => {
  const goApp = () => {
    window.chrome.tabs.create({
      url: window.chrome.runtime.getURL('/options.html'),
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        Popup
        <div className="App-link" onClick={goApp}>
          Go App!
        </div>
      </header>
    </div>
  );
};

export default Popup;
