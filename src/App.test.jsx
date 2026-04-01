import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);

  const div = document.createElement('div');
  document.body.appendChild(div);

  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);

  document.body.removeChild(div);
  document.body.removeChild(modalRoot);
});
