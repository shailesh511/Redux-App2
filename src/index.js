import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './Services/Reducers/index'
const store = createStore(rootReducer);
console.warn("strored data ", store);
ReactDOM.render(
  <Provider store = {store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
