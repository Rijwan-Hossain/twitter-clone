import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { DELETE_USER } from '../../store/actions/actionTypes'


function Nav(props) {
   let state = useSelector(state => state.auth)

   const logout = () => { 
      props.dataDeleteFromRedux(state.user); 
      localStorage.removeItem('token');
      props.history.push('/');
      axios.post('/api/logout', state.user);
   } 

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
                     state.isAuthenticated ?
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
                              <button
                                 onClick={logout}
                                 className='btn btn-outline-info text-white'>
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

const mapDispatchToProps = (dispatch) => { 
   return { 
      dataDeleteFromRedux: (user) => dispatch({ 
         type: DELETE_USER, 
         payload: { 
            isAuthenticated: false, 
            user: {} 
         } 
      }) 
   } 
} 

export default connect(null, mapDispatchToProps)(withRouter(Nav));
