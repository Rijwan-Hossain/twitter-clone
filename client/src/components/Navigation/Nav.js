import React, {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import jwtDecode from 'jwt-decode' 

function Nav() {
   // let [isLogin, setIsLogin] = useState(false) 
   // try { 
   //    let token = localStorage.getItem('token').split(' ')[1] 
   //    setIsLogin(jwtDecode(token.isLogin)); 
   // } 
   // catch (error) {} 

   // useEffect(() => { 

   // }, [isLogin]) 
   

   return (
      <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
         <div className='container'>
            <Link to='/'>
               <span className='navbar-brand'> 
                  <h4>Meet Twitt</h4> 
               </span> 
            </Link> 
            <button 
               className='navbar-toggler' 
               type='button' 
               dataToggle='collapse' 
               dataTarget='#nav'> 
               <span className='navbar-toggler-icon'></span> 
            </button> 
            <div className='collapse navbar-collapse' id='nav'> 
               <ul className='navbar-nav ml-auto'> 
                  { 
                     null ? 
                     <React.Fragment> 
                        <li className='nav-item'> 
                           <NavLink to='/' activeClassName='active' exact> 
                              <span className='nav-link'> 
                                 Home 
                              </span> 
                           </NavLink> 
                        </li> 
                        <li className='nav-item'> 
                           <NavLink to='/Profile' activeClassName='active'>
                              <span className='nav-link'> 
                                 Profile 
                              </span> 
                           </NavLink> 
                        </li> 
                        <li className='nav-item'> 
                           <button className='btn btn-outline-info text-white'> 
                              Logout 
                           </button> 
                        </li> 
                     </React.Fragment> 
                     : 
                     <React.Fragment> 
                        <li className='nav-item'> 
                           <NavLink to='/registration' activeClassName='active'>
                              <span className='nav-link'> 
                                 Registration 
                              </span> 
                           </NavLink> 
                        </li> 
                        <li className='nav-item'> 
                           <NavLink to='/login' activeClassName='active'>
                              <span className='nav-link'> 
                                 Login 
                              </span> 
                           </NavLink> 
                        </li> 
                     </React.Fragment> 
                  } 
               </ul> 
            </div> 
         </div> 
      </nav> 
   ) 
} 

export default Nav;
