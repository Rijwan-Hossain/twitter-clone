import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import { Provider } from 'react-redux'; 
import store from './store/index'; 


// setAuthToken 
const token = localStorage.getItem('token') 
if (token) { 
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
