import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { compose, createStore } from 'redux';
import rootReducer from './redux/reducers';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
       <App />
   </Provider>
);

