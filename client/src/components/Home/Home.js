import React from 'react'
import Landing from './Landing'
import { useSelector } from 'react-redux'

function Home() { 
   let state = useSelector(state => state.auth) 
   
   return ( 
      <div className="container"> 
         <div style={{ height: '80px' }}></div> 
         { 
            state.isAuthenticated 
               ? 
               <React.Fragment> 
                  <div> 
                     <h4>Yahooo! I am a logged in user</h4> 
                     <h5>I am {state.user.name}</h5> 
                     <h5>My email: {state.user.email}</h5> 
                  </div> 
               </React.Fragment> 
               : 
               <React.Fragment> <Landing /> </React.Fragment> 
         } 
      </div> 
   )
}

export default Home 
