import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
  ), document.getElementById('root'));
registerServiceWorker();
