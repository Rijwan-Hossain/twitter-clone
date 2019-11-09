import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postTwitt } from '../../store/actions/twittAction'
import Dropdown from 'react-dropdown' 
import 'react-dropdown/style.css' 

import avatar from '../../assets/images/avatar.jpg'

function CreateTwitt() { 
    let [data, setData] = useState('') 
    let [option, setOption] = useState('public') 

    let { user } = useSelector(state => state.auth) 
    let dispatch = useDispatch() 
    
    const options = ['public', 'only me']

    const create = () => { 
        let twitt = { 
            author: user.id, 
            body: data, 
            display: option 
        } 
        dispatch(postTwitt(twitt)); 

        setData(''); 
        setOption('public'); 
    } 

    return ( 
        <> 
            <div style={{
                border: '1px solid #e0e0e0',
                borderRadius: '5px', 
                padding: '20px', 
            }}> 
                <h5>Create Twitt</h5> 
                {/* avatar & textarea */}
                <div style={{
                        borderBottom: '1px solid #e0e0e0'
                    }}
                    className="d-flex"> 
                    <img 
                        src={user.avatar ? user.avatar : avatar} 
                        height="50px"
                        width="50px"
                        alt={user.name} /> 
                    <textarea style={{
                            width: '100%',
                            borderStyle: 'none', 
                            marginLeft: '20px', 
                            resize: 'none', 
                            boxShadow: 'none', 
                            outline: 'none', 
                            height: '8em'
                        }} 
                        value={data}
                        placeholder="Express yourself.."
                        onChange={(e) => setData(e.target.value)}
                        > </textarea>
                    
                </div>
            
                {/* privacy & submit */} 
                <div style={{display: 'flex'}}> 
                <Dropdown  
                    className="mt-2"
                    options={options} 
                    onChange={() => { 
                        option === 'public' 
                        ? setOption('only me')
                        : setOption('public')
                    }} 
                    value={option} /> 
                <button 
                    onClick={create}
                    className="btn btn-success ml-2 mt-2"> 
                    Twitt 
                </button> 
            </div> 
            </div> 
        </> 
    ) 
} 

export default CreateTwitt 
