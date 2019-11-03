import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import avatar from '../../assets/images/avatar.jpg'
import * as moment from 'moment' 
import axios from 'axios' 


function NewTwitt({twitt}) { 
    // console.log(twitt);
    
    let user = useSelector(state => state.auth.user) 
    let createdAt = moment(user.createdAt).format('LLLL') 
    
    let [like, setLike] = useState(twitt.upVote) 
    let [dislike, setDislike] = useState(twitt.downVote) 

    const likeHandler = () => {
        axios.get(`/api/twitt/${twitt._id}/like`)
            .then(res => {
                setLike(res.data.data.upVote);
            }) 
            .catch(err => {console.log(err)})
    } 
    const dislikeHandler = () => {
        axios.get(`/api/twitt/${twitt._id}/dislike`)
            .then(res => {
                setDislike(res.data.data.downVote);
            }) 
            .catch(err => {console.log(err)})
    } 
    return ( 
        <div 
            style={{ 
                background: 'white', 
                border: '1px solid #e0e0e0', 
                borderRadius: '5px', 
                marginTop: '20px', 
                padding: '20px' 
            }}> 
            <h6 style={{color: '#795548'}}>New Twitt</h6> 
            { user.name && 
            <div>
                <div className="d-flex">
                    <img src={user.avatar ? user.avatar : avatar} 
                        height="50px" 
                        width="50px" 
                        alt="your pic"/> 
                    <div className="ml-2">
                        <h4 style={{ color: '#3f51b5'}}> 
                            {user.name} 
                        </h4> 
                        <p style={{fontSize: '13px', marginTop: '-5px', color: '#546e7a'}}>
                            {createdAt}
                        </p>
                    </div>
                </div> 
                <p style={{
                    fontSize: '20px'
                }}>
                    {twitt.body} 
                </p> 
                <hr/> 
                <div className="d-flex"> 
                <span style={{width: '50%'}}> 
                    <center 
                        onClick={likeHandler}
                        style={{cursor: 'pointer'}}> 
                        <i className="fa fa-thumbs-o-up fa-lg"></i> Like {like} 
                    </center> 
                </span> 
                <span style={{width: '50%'}}> 
                    <center 
                        onClick={dislikeHandler} 
                        style={{cursor: 'pointer'}}>
                        <i className="fa fa-thumbs-o-down fa-lg"></i> Disike {dislike} 
                    </center> 
                </span> 
                </div> 
            </div> 
            }
        </div> 
    ) 
} 

export default NewTwitt; 
