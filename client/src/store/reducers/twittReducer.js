import { 
    CREATE_TWITT, 
    DELETE_TWITT, 
    GET_ALL_TWITT, 
    LIKE_TWITT, 
    DISLIKE_TWITT
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
                isTwitt: true, 
                allTwitts: state.allTwitts.concat(action.payload), 
                twittLength: state.allTwitts.length 
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
        case LIKE_TWITT: { 
            console.log('reducer'); 
            console.log(action.payload); 
            
            return {
                ...state, 
                allTwitts: action.payload 
            }
        }
        case DISLIKE_TWITT: {
            return {
                ...state, 
                allTwitts: action.payload 
            }
        }
        default: return state; 
    } 
} 

export default twittReducer; 
