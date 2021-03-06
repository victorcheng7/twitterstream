import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import {Provider} from 'react-redux';
import store from '../redux/store';
import App from './components/App'


ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
