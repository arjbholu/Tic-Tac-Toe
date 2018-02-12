import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import boardGame  from './reducers'
import App from './components/App';

let store = createStore(boardGame);
// console.log(store.getState())

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
)
