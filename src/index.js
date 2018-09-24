import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import logger from 'redux-logger';

if(process.env.REACT_APP_DEBUG_MODE){
  const store = createStore(rootReducer, applyMiddleware(logger));
} else {
  const store = createStore(rootReducer);
}

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
  ), document.getElementById('root'));
registerServiceWorker();
