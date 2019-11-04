import { CREATE_TWITT, DELETE_TWITT } from '../actions/actionTypes' 

const initState = { 
    isTwitt: false, 
    isDeleted: false,
    response: {} 
} 

const twittReducer = (state = initState, action) => { 
    switch (action.type) { 
        case CREATE_TWITT: { 
            return { 
                isTwitt: true, 
                isDeleted: false,
                response: action.payload 
            } 
        } 
        case DELETE_TWITT: {
            return {
                ...initState, 
                isDeleted: true
            }
        }
        default: return state; 
    } 
} 

export default twittReducer; 
