import { CREATE_TWITT } from '../actions/actionTypes' 

const initState = { 
    isTwitt: false, 
    response: {} 
} 

const twittReducer = (state = initState, action) => { 
    switch (action.type) { 
        case CREATE_TWITT: { 
            return { 
                isTwitt: true, 
                response: action.payload 
            } 
        } 
        default: return state; 
    } 
} 

export default twittReducer; 
