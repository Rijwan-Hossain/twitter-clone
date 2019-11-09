import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllTwitt } from '../../store/actions/twittAction'

function AllTwitt() { 
    let dispatch = useDispatch() 
    let {allTwitts: twitts} = useSelector(state => state.twitt)
    console.log('twitts');
    console.log(twitts);
    
    useEffect(() => { 
        dispatch(getAllTwitt()) 
    }, []) 
    
    
    return ( 
        <> 
            <h3>{twitts.length} twitts</h3>
        </>
    ) 
} 

export default AllTwitt;
