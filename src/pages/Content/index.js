console.log('Hello Websurfer!');

let contentPort;

statWebsurferRelay();

window.addEventListener('WEBSURFER_RELAY_REQUEST', (event) => {
  const { detail: data } = event;
  try {
    sendPostMessage(contentPort, data);
  } catch (e) {
    console.log(e);
    statWebsurferRelay();
    sendPostMessage(contentPort, data);
  }
});

function statWebsurferRelay() {
  contentPort = window.chrome.runtime.connect(
    'mkaefnhphgcdcfijioijiobgbadmabef',
    {
      name: 'websurfer-background-content',
    }
  );
}

function sendPostMessage(port, data) {
  if (!!port && typeof port.postMessage === 'function') {
    const { type } = data;
    switch (type) {
      case 'REQUEST_SIGNING':
      case 'REQUEST_TOKEN':
      case 'DELETE_TOKEN':
        port.postMessage({
          ...data,
          host: window.location.hostname,
        });
        break;

      default:
    }
  }
}

chrome.runtime.onMessage.addListener((detail) => {
  const customEvent = new CustomEvent('WEBSURFER_RELAY_RESPONSE', { detail });
  window.dispatchEvent(customEvent);
});
