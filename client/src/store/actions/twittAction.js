import axios from 'axios' 
import { 
    CREATE_TWITT, 
    DELETE_TWITT, 
    GET_ALL_TWITT, 
    LIKE_TWITT, 
    DISLIKE_TWITT
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
        .then((res) => { 
            let {data} = res.data;
            dispatch({ type: CREATE_TWITT, payload: data }) 
        }) 
        .catch(err => { console.log(err) }) 
} 


export const deleteTwitt = (id) => dispatch => { 
    axios.delete(`/api/twitt/${id}`) 
        .then(res => { 
            dispatch({ 
                type: DELETE_TWITT, 
                payload: res.data.twitts 
            }) 
        }) 
        .catch(err => { console.log('Server Error while delete') }) 
} 


export const likeTwitt = (id) => dispatch => { 
    axios.get(`/api/twitt/${id}/like`) 
        .then(res => { 
            console.log(res.data); 
            dispatch({ 
                type: LIKE_TWITT, 
                payload: res.data.twitts 
            }) 
        }) 
        .catch(err => console.log('Server Error while like')) 
} 


export const dislikeTwitt = (id) => dispatch => { 
    console.log(id);
    
    axios.get(`/api/twitt/${id}/dislike`) 
        .then(res => { 
            console.log(res.data); 
            dispatch({ 
                type: DISLIKE_TWITT, 
                payload: res.data.twitts 
            }) 
        }) 
        .catch(err => console.log('Server Error while dislike')) 
} 
