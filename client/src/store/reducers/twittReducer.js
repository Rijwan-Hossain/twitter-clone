import { CREATE_TWITT } from '../actions/actionTypes' 

const initState = { 
    author: null, 
    body: null, 
    imageUrl: null 
} 

const twittReducer = (state = initState, action) => { 
    switch (action.type) { 
        case CREATE_TWITT: {  

        } 
        default: return state; 
    } 
} 

export default twittReducer; 
