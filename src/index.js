import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, connect } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { searchRobots } from './reducers';

const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(searchRobots, composeEnhancers(
  applyMiddleware(logger)
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App /> 
      </Provider>   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
