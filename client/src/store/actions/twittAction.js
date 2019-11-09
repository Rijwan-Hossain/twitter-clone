import axios from 'axios' 
import { 
    CREATE_TWITT, 
    DELETE_TWITT, 
    GET_ALL_TWITT
} from './actionTypes'

export const getAllTwitt = () => dispatch => { 
    axios.get('/api/twitt') 
        .then(res => { 
            console.log('res.data');
            console.log(res.data);
            
            dispatch({ 
                type: GET_ALL_TWITT, payload: res.data.twitts 
            }) 
        }) 
        .catch(err => { console.log(err) }) 
}


export const postTwitt = (twitt) => dispatch => { 
    axios.post('/api/twitt', twitt) 
        .then((res) => { 
            let {data} = res.data;
            dispatch({ type: CREATE_TWITT, payload: data }) 
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