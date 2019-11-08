import { 
    CREATE_TWITT, 
    DELETE_TWITT, 
    GET_ALL_TWITT
} from '../actions/actionTypes' 

const initState = { 
    isTwitt: false, 
    isDeleted: false, 
    isUpdated: false, 
    allTwitts: [] 
} 

const twittReducer = (state = initState, action) => { 
    switch (action.type) { 
        case CREATE_TWITT: { 
            return { 
                ...state, 
                isTwitt: true 
            } 
        } 
        case GET_ALL_TWITT: { 
            return { 
                ...state, 
                allTwitts: action.payload 
            } 
        } 
        case DELETE_TWITT: {
            return {
                ...state, 
                isDeleted: true 
            }
        } 
        default: return state; 
    } 
} 

export default twittReducer; 
