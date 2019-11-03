import axios from 'axios' 
import { CREATE_TWITT } from './actionTypes'

export const postTwitt = (twitt) => dispatch => { 
    axios.post('/api/twitt', twitt) 
        .then(res => { 
            dispatch({ 
                type: CREATE_TWITT, 
                payload: res.data 
            }) 
        }) 
        .catch(err => {
            console.log('from action');
            
            console.log(err)
        }) 
} 

