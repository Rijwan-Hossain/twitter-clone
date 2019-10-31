import { SET_USER, DELETE_USER } from '../actions/actionTypes'

let initState = { 
    isAuthenticated: false, 
    user: {} 
} 

const authReducer = (state = initState, action) => { 
    switch (action.type) { 
        case SET_USER: { 
            return { 
                isAuthenticated: true, 
                user: action.payload  
            } 
        } 
        case DELETE_USER: {
            return action.payload 
        }
        default: { 
            return state 
        } 
    } 
} 

export default authReducer
