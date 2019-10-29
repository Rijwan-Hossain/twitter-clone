import React from 'react'
import Form from './Form'

function Login() { 
    return ( 
        <React.Fragment> 
            <div style={{height: '80px'}}></div> 
            <div style={{
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                width: '350px'
            }}>
                <h1 className="display-4 mb-3" 
                    style={{ 
                        textAlign: 'center', color: 'steelblue'
                    }}> 
                    Login 
                </h1>  
                <Form /> 
            </div> 
        </React.Fragment> 
    
    ) 
} 

export default Login
