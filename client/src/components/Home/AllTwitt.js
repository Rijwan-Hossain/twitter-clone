import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllTwitt } from '../../store/actions/twittAction'
import SingleTwitt from './SingleTwitt'

function AllTwitt() { 
    let dispatch = useDispatch() 
    let {allTwitts: twitts} = useSelector(state => state.twitt)
    console.log(twitts);
    
    let [load, setLoad] = useState(true) 
    
    useEffect(() => { 
        dispatch(getAllTwitt()) 
    }, []) 
    
    
    return ( 
        <> 
        <div className="mt-5">
            { 
                load ? `Loading ${twitts.length ? setLoad(false): ''}` : 
                <div>
                    <h3>{twitts.length} twitts</h3> 
                    <div> 
                    { 
                        twitts.map(twitt => { 
                            return ( 
                                <SingleTwitt twitt={twitt} /> 
                            ) 
                        }) 
                    } 
                    </div> 
                </div> 
            } 
            </div>
        </> 
    ) 
} 

export default AllTwitt; 
