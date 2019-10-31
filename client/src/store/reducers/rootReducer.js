import { combineReducers } from 'redux'
import authReducer from './authReducer'
const rootReducer = combineReducers({ 
    // reducers 
    auth: authReducer 
}) 

export default rootReducer; 