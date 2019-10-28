import React from 'react'
import Landing from './Landing'

function Home() {
   return (
      <div className="container"> 
         <div style={{height: '80px'}}></div> 
         {
            null 
            ? 
            <React.Fragment> 
               <div></div> 
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
