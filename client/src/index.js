import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import { Provider } from 'react-redux'; 
import store from './store/index'; 

import jwtDecode from 'jwt-decode'
import { SET_USER } from './store/actions/actionTypes'


// setAuthToken 
const token = localStorage.getItem('token') 

if (token) { 
    console.log('got the token');
    
    let decode = jwtDecode(token) 
    let user = {
        ...decode
    } 
    
    store.dispatch({ 
        type: SET_USER, 
        payload: user
    }) 

    if (token) { 
        axios.defaults.headers.common['Authorization'] = token
    } else { 
        axios.defaults.headers.common['Authorization'] = '' 
    } 
} 





ReactDOM.render( 
    <Provider store={store}> 
        <App /> 
    </Provider>, 
    document.getElementById('root') 
); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
