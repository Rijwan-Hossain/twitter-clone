import React, {useState} from 'react' 
import axios from 'axios'
import { useSelector } from 'react-redux'
import avatar from '../../assets/images/avatar.jpg'
import photo from '../../assets/images/photo.png'
import './create.css' 
import 'react-dropdown/style.css' 
import Dropdown from 'react-dropdown' 

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/rijyan/upload' 
const CLOUDINARY_UPLOAD_PRESET = 'yrsdydlb'


function CreateTwitt() { 
    let [area, setArea] = useState(4) 
    let [value, setValue] = useState('') 
    let [imageUrl, setImageUrl] = useState('') 
    let [option, setOption] = useState('public') 

    let state = useSelector(state => state.auth); 
    
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
    
    return ( 
        <div 
            style={{ 
                border: '1px solid #e0e0e0',
                borderRadius: '5px', 
                padding: '20px', 
                boxShadow: area === 8 ? '0px 0px 30px 5px rgb(230, 230, 230)' : null, 
                transition: area === 8 ? 'all .3s' : null 
            }}> 
            <div style={{borderBottom: '1px solid #757575'}}
                className="d-flex">
                <img src={state.user.avatar ? state.user.avatar : avatar} 
                    height="50px"
                    width="50px"
                    alt="Pic"/> 
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
                    onBlur={() => setArea(4)}
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
                    // style={{maxHeight: '40px'}}
                    className="btn btn-success ml-3 mt-2"> 
                    Twitt 
                </button> 
            </div> 
        </div> 
    ) 
} 

export default CreateTwitt; 
