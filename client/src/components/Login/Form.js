import React, { useState } from 'react' 
import axios from 'axios'
import { withRouter, Link } from 'react-router-dom' 
import { connect } from 'react-redux'
import { SET_USER } from '../../store/actions/actionTypes'

function Form(props) { 
    let [email, setEmail] = useState('') 
    let [password, setPassword] = useState('') 

    // Error variables 
    let [emailMsg, setEmailMsg] = useState(false)
    let [wrongPass, setWrongPass] = useState(false)
    let [err, setErr] = useState(false) 

    const submitHandler = (e) => { 
        e.preventDefault() 
        axios.post('/api/login', {email, password}) 
            .then(res => { 
                props.dataSaveToRedux(res.data.payload); 
                
                let {invalidEmailMsg} = res.data; 
                setEmailMsg(invalidEmailMsg); 
                let {invalidPassMsg} = res.data; 
                setWrongPass(invalidPassMsg); 
                let {error} = res.data; 
                setErr(error); 

                if(res.data.status === 'Success') { 
                    localStorage.setItem('token', res.data.token) 
                    props.history.push('/') 
                } 
            }) 
            .catch(err => { 
                console.log('Server Error, ' + err); 
            }) 
    } 

    return ( 
        <div style={{ 
            padding: '30px', 
            border: '1px solid rgb(238, 238, 238)',
            boxShadow: '0px 2px 4px 0px rgb(226, 226, 226)'
        }}> 
            <form onSubmit={submitHandler}> 
                <div className="form-group"> 
                    <input
                        type="email"
                        name="email"
                        className="form-control col-md-12 my-3"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    /> 
                    {
                        emailMsg &&
                        <div style={{ 
                            background: 'rgb(243, 133, 133)',
                            fontSize: '13px', 
                            padding: '3px 15px', 
                            borderRadius: '2%'
                        }}> 
                            {emailMsg} 
                        </div> 
                    }
                    
                    <input
                        type="password"
                        name="password"
                        className="form-control col-md-12 my-3"
                        placeholder="Enter Your Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    /> 
                    {
                        wrongPass &&
                        <div style={{ 
                            background: 'rgb(243, 133, 133)',
                            fontSize: '13px', 
                            padding: '3px 15px', 
                            borderRadius: '2%'
                        }}> 
                            {wrongPass} 
                        </div> 
                    } 
                    {
                        err &&
                        <div style={{ 
                            background: 'rgb(243, 133, 133)',
                            fontSize: '13px', 
                            padding: '3px 15px', 
                            borderRadius: '2%'
                        }}> 
                            {err} 
                        </div> 
                    } 
                </div> 
                <Link to="/registration">Don't have account? Register Here</Link>
                <br /> 
                <button 
                    type="Submit" 
                    className="btn btn-primary mb-3"> 
                    Submit 
                </button> 
            </form> 
        </div> 
    ) 
} 

const mapDispatchToProps = (dispatch) => { 
    return { 
        dataSaveToRedux: (user) => dispatch({ 
            type: SET_USER, 
            payload: user
        }) 
    } 
} 

export default connect(null, mapDispatchToProps)(withRouter(Form)) 
