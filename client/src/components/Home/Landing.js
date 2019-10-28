import React from 'react' 
import me from '../../assets/images/me.jpg' 

function Landing() { 
    return ( 
        <React.Fragment> 
            <h3>Welcome to Rijwan Twitter.</h3> 
            <p style={{
                fontSize: '25px'
            }}>
                Please signup & login to enjoy the services. 
            </p> 
            <div style={{ 
                position: 'relative', 
                width: '602px'
            }}> 
                <img 
                    src={me} 
                    height="400px" 
                    width="602px"
                    alt="CSE Carnival Crest Recieve" /> 
                <p style={{ 
                    position: 'absolute', 
                    top: '68%', 
                    textAlign: 'center',
                    fontSize: '20px',
                    width: '100%',
                    padding: '10px 0px',
                    color: 'rgb(220, 220, 220)', 
                    background: 'rgba(30, 30, 30, 0.7)', 
                }}> 
                    Programming Contest 
                    <br/> 
                    Position: Runners Up
                    <br/> 
                    Awarded on GUB CSE carnival 2016 
                </p> 
            </div> 
        </React.Fragment> 
    ) 
} 

export default Landing 
