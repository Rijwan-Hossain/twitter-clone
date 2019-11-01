import React from 'react'
import {useSelector} from 'react-redux'

function Profile() { 
    let state = useSelector(state => state.auth) 
    return ( 
        <div className="container"> 
            <div style={{height: '80px'}}></div> 
            <h3> 
                Welcome {state.user.name}, to your profile. <br/> 
                {state.user.email} 
            </h3> 
        </div> 
    ) 
} 

export default Profile
