import React, {useState } from 'react' 
import { postTwitt } from '../../store/actions/twittAction'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import avatar from '../../assets/images/avatar.jpg'
import photo from '../../assets/images/photo.png'
import Dropdown from 'react-dropdown' 
import 'react-dropdown/style.css' 
import './create.css' 

import NewTwitt from './NewTwitt'

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/rijyan/upload' 
const CLOUDINARY_UPLOAD_PRESET = 'yrsdydlb'


function CreateTwitt() { 
    let [value, setValue] = useState('') 
    let state = useSelector(state => state.auth); 
    let twittRes = useSelector(state => state.twitt); 
    
    let dispatch = useDispatch(); 

    let [area, setArea] = useState(4) 
    
    let [imageUrl, setImageUrl] = useState('') 
    let [option, setOption] = useState('public') 

    
    
    const options = ['public', 'only me']

    const fileHandler = (e) => { 
        let file = e.target.files[0] 
        console.log(file); 

        let fd = new FormData() 
        fd.append('file', file)  
        fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET) 
        
        axios({ 
            url: CLOUDINARY_URL, 
            method: 'POST', 
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}, 
            data: fd 
        }) 
            .then(res => { 
                console.log(res);
                
                setImageUrl(res.data.secure_url) 
            }) 
            .catch((err) => { 
                window.alert('Server Error') 
            }) 
    
    } 
    
    const create = () => { 
        let twitt = { 
            author: state.user.id, 
            body: value, 
            imageUrl, 
            display: option 
        } 
        dispatch(postTwitt(twitt)); 

        setValue(''); 
        setOption('public'); 
    } 

    return ( 
        <div>
        <div 
            style={{ 
                background: 'white', 
                border: '1px solid #e0e0e0',
                borderRadius: '5px', 
                padding: '20px', 
                boxShadow: area === 8 ? '0px 0px 30px 5px rgb(230, 230, 230)' : null, 
                transition: area === 8 ? 'all .3s' : null 
            }}> 
            <div style={{borderBottom: '1px solid #e0e0e0'}}
                className="d-flex">
                <img src={state.user.avatar ? state.user.avatar : avatar} 
                    height="50px"
                    width="50px"
                    alt="your pic"/> 
                <textarea style={{
                    width: '100%',
                    borderStyle: 'none', 
                    marginLeft: '20px', 
                    resize: 'none', 
                    boxShadow: 'none', 
                    outline: 'none', 
                    height: area === 8 ? '12em' : '7em', 
                    transition: area === 8 ? 'all .3s' : null 
                }} 
                    onFocus={() => setArea(8)} 
                    onBlur={() => {
                        value ? 
                        setTimeout(() => {
                            setArea(4);
                        }, 500) 
                        : setArea(4)
                    }} 
                    placeholder="Express yourself..."
                    value={value} 
                    onChange={(e) => {setValue(e.target.value)}}
                    > 
                </textarea> 
                { 
                    imageUrl && 
                    <div> 
                        <img src={imageUrl} 
                            alt="image" height="300px"/>  
                        <p style={{ 
                            fontSize: '12px',  
                            color: '#ff5252' 
                        }}> 
                            You can upload only one image on a twitt...
                        </p> 
                    </div> 
                } 
            </div> 
            <div style={{display: 'flex'}}> 
                <label style={{cursor: 'pointer'}}
                    className="badge badge-pill badge-dark p-2 m-2">
                    <img src={photo} height="13px" className="mr-1" />
                    photo 
                    <input 
                        type="file"
                        onChange={fileHandler} 
                        style={{display: 'none'}} 
                        id="File" /> 
                        {/*  size="60"  */}
                </label> 
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
        { twittRes.isTwitt ? <NewTwitt twitt={twittRes.response.data} /> : null } 
        </div> 
    ) 
} 

export default CreateTwitt; 
