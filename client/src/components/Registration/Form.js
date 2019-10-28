import React, { useState } from 'react' 
import axios from 'axios'

function Form() { 
    // let [state, setState] = useState({})
    let [name, setName] = useState('') 
    let [email, setEmail] = useState('') 
    let [password, setPassword] = useState('') 
    let [confirmPassword, setConfirmPassword] = useState('') 

    // Error variables 
    let [duplicate, setDuplicate] = useState(false) 
    let [err, setErr] = useState(false) 
    let [passNoMatch, setPassNoMatch] = useState(false) 
    let [ok, setOk] = useState(false) 


    const submitHandler = (e) => { 
        e.preventDefault() 
        if(password === confirmPassword) { 
            // setSubmit(true) 
            axios.post('/api/registration', {name, email, password}) 
                .then(res => { 
                    let {message} = res.data 
                    setDuplicate(message) 

                    let {error} = res.data 
                    setErr(error) 

                    let {status} = res.data 
                    setOk(status) 
                }) 
                .catch(err => { 
                    console.log('Server Error, ' + err); 
                }) 
        } 
        else { 
            setPassNoMatch(true)
        } 
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
                        type="name" 
                        name="name" 
                        className="form-control col-md-12 my-3"
                        placeholder="Enter Your Name"
                        value={name} 
                        onChange={e => setName(e.target.value)}
                        required
                    /> 
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
                        duplicate &&
                        <div style={{ 
                            background: 'rgb(243, 133, 133)',
                            fontSize: '13px', 
                            padding: '3px 15px', 
                            borderRadius: '2%'
                        }}> 
                            {duplicate} 
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
                    <input
                        type="password"
                        name="password"
                        className="form-control col-md-12 my-3"
                        placeholder="Enter Your Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    /> 
                    <input
                        type="password"
                        name="confirmPassword"
                        className="form-control col-md-12 my-3"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        required
                    /> 
                    { 
                        passNoMatch && 
                        <div style={{ 
                            background: 'rgb(243, 133, 133)',
                            fontSize: '13px', 
                            padding: '3px 15px', 
                            borderRadius: '2%'
                        }}> 
                            Password does not match 
                        </div> 
                    } 
                </div> 
                <button 
                    type="Submit" 
                    className="btn btn-primary mb-3"> 
                    Submit 
                </button> 
            </form> 
            { 
                ok && 
                <div> 
                    <p style={{ fontSize: '20px' }}> 
                        Signup Successful. 
                    </p> 
                    <p> 
                        Now you can login 
                    </p> 
                </div> 
            } 
        </div> 
    ) 
} 

export default Form
