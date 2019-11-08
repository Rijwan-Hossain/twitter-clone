import axios from 'axios' 
import { 
    CREATE_TWITT, 
    DELETE_TWITT, 
    GET_ALL_TWITT
} from './actionTypes'

export const getAllTwitt = () => dispatch => { 
    axios.get('/api/twitt') 
        .then(res => { 
            dispatch({ 
                type: GET_ALL_TWITT, payload: res.data.twitts 
            }) 
        }) 
        .catch(err => { console.log(err) }) 
}


export const postTwitt = (twitt) => dispatch => { 
    axios.post('/api/twitt', twitt) 
        .then(() => { 
            dispatch({ type: CREATE_TWITT }) 
        }) 
        .catch(err => { console.log(err) }) 
} 

export const deleteTwitt = (id) => dispatch => { 
    axios.delete(`/api/twitt/${id}`) 
        .then(res => { 
            dispatch({ type: DELETE_TWITT }) 
        }) 
        .catch(err => { console.log(err) }) 
}