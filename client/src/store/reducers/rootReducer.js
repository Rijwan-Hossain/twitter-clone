import { combineReducers } from 'redux'
import authReducer from './authReducer'
import twittReducer from './twittReducer'
const rootReducer = combineReducers({ 
    // reducers 
    auth: authReducer, 
    twitt: twittReducer
}) 

export default rootReducer; 