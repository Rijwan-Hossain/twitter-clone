import React, { useState, useEffect } from 'react'
import Landing from './Landing'

function Home(props) { 
   console.log('props');
   console.log(props.location.state);
   
   let [user, setUser] = useState(false) 

   useEffect(() => {
      if(props.location.state)
         setUser(props.location.state.user.isLogin)
   }, []) 

   return ( 
      <div className="container"> 
         <div style={{height: '80px'}}></div> 
         { 
            user 
            ? 
            <React.Fragment> 
               <div> 
                  <h1>Yahooo! I am a logged in user</h1> 
               </div> 
            </React.Fragment> 
            : 
            <React.Fragment> 
               <Landing /> 
            </React.Fragment> 
         } 
      </div> 
   ) 
} 

export default Home 
