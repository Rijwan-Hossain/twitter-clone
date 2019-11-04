import axios from 'axios' 
import { CREATE_TWITT, DELETE_TWITT } from './actionTypes'

export const postTwitt = (twitt) => dispatch => { 
    axios.post('/api/twitt', twitt) 
        .then(res => { 
            dispatch({ 
                type: CREATE_TWITT, payload: res.data 
            }) 
        }) 
        .catch(err => { console.log(err) }) 
} 

export const deleteTwitt = (id) => dispatch => { 
    axios.delete(`/api/twitt/${id}`) 
        .then(res => { 
            dispatch({ 
                type: DELETE_TWITT, 
                payload: {} 
            }) 
        }) 
        .catch(err => { console.log(err) }) 
}