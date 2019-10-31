import React, { useState, useEffect } from 'react'
import Landing from './Landing'
import jwtDecode from 'jwt-decode'

function Home() { 
   let [isLogin, setIsLogin] = useState(false) 
   let [i, setI] = useState(1) 
   
   try { 
      let token = localStorage.getItem('token').split(' ')[1] 
      setIsLogin(jwtDecode(token).isLogin); 
   } 
   catch (error) { } 

   useEffect(() => { 
      console.log('is login updated'); 
   }, [isLogin]) 

   return ( 
      <div className="container"> 
         <div style={{ height: '80px' }}></div> 
         { 
            isLogin 
               ? 
               <React.Fragment> 
                  <div> 
                     <h4>Yahooo! I am a logged in user</h4> 
                     {/* <h5>I am {user.name}</h5> 
                     <h5>My email: {user.email}</h5> */} 
                  </div> 
               </React.Fragment> 
               : 
               <React.Fragment> <Landing /> </React.Fragment> 
         } 
      </div> 
   )
}

export default Home 
