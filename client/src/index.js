// File where we are going to connect our react application to the index html file
import React from 'react';
import  ReactDOM  from 'react-dom';
import { Provider } from 'react-redux'; // Provider is going to keep track of the store which is the global state and that allows us to access that store from anywhere inside the app, we don't have to be in api component or child component.
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';




import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk))) // To set redux


ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
     document.getElementById('root')
);