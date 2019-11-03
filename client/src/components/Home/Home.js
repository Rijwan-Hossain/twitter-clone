import React from 'react'
import Landing from './Landing'
import { useSelector } from 'react-redux'
import CreateTwitt from './CreateTwitt'

function Home() { 
   let state = useSelector(state => state.auth) 
   
   return ( 
      <div className="container"> 
      <div style={{ height: '80px' }}></div> 
      { 
         state.isAuthenticated 
         ? 
         <React.Fragment> 
            <CreateTwitt /> 
         </React.Fragment> 
         : 
         <React.Fragment> <Landing /> </React.Fragment> 
      } 
      </div> 
   )
}

export default Home 
