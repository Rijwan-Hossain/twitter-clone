import axios from 'axios' 
import { CREATE_TWITT } from './actionTypes'

export const createTwitt = () => dispatch => { 
    dispatch({
        type: CREATE_TWITT, 
        payload: ''
    })
    axios.post('/api/twitt') 
        .then() 
        .catch() 
}

