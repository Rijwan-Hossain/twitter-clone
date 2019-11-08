import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllTwitt } from '../../store/actions/twittAction'
import NewTwitt from './NewTwitt'

function AllTwitt() { 
    let dispatch = useDispatch() 
    let { response: twitts } = useSelector(state => state.twitt)
    
    useEffect(() => { 
        dispatch(getAllTwitt()) 
    }, []) 
    
    
    
    

    return ( 
        <> 
            <h3>All twitts</h3>
        </>
    ) 
} 

export default AllTwitt;
