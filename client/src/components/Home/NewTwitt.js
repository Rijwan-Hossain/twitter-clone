import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTwitt } from '../../store/actions/twittAction'
import avatar from '../../assets/images/avatar.jpg'
import * as moment from 'moment'
import axios from 'axios'


function NewTwitt({twitt}) { 
    let createdAt = moment().format('LLLL') 

    // **********************
    //      react-redux 
    let user = useSelector(state => state.auth.user) 
    let dispatch = useDispatch(); 


    // **********************
    //      react-hooks
    let [like, setLike] = useState(twitt.upVote) 
    let [dislike, setDislike] = useState(twitt.downVote) 



    // ******************
    //      handlers
    
    const likeHandler = () => {
        axios.get(`/api/twitt/${twitt._id}/like`)
            .then(res => {
                setLike(res.data.data.upVote);
            })
            .catch(err => { console.log(err) })
    } 
    const dislikeHandler = () => {
        axios.get(`/api/twitt/${twitt._id}/dislike`)
            .then(res => {
                setDislike(res.data.data.downVote);
            })
            .catch(err => { console.log(err) })
    } 
    const deleteHandler = () => { 
        let x = window.confirm('Are you sure, you want to permanently delete?')
        if (x) dispatch(deleteTwitt(twitt._id)) 
    } 
    const updateHandler = () => {} 
    


    // *************
    //      JSX 
    return ( 
        <div> 
            <div 
                style={{
                    background: 'white',
                    border: '1px solid #e0e0e0',
                    borderRadius: '5px',
                    marginTop: '20px',
                    padding: '20px'
                }}> 
                <h6 style={{ color: '#795548' }}>New Twitt</h6>
                {user.name &&
                <div> 
                    {/* name, avatar, delete, update */}
                    <div className="d-flex">
                        <img src={user.avatar ? user.avatar : avatar}
                            height="50px"
                            width="50px"
                            alt="your pic" />
                        <div className="ml-2">
                            <h4 style={{ color: '#3f51b5' }}>
                                {user.name}
                            </h4>
                            <p style={{ fontSize: '13px', marginTop: '-5px', color: '#546e7a' }}>
                                {createdAt}
                            </p>
                        </div>
                        <i onClick={updateHandler}
                            style={{ cursor: 'pointer' }}
                            className="fa fa-edit fa-lg ml-auto mr-2 mt-2"></i>
                        <i onClick={deleteHandler}
                            style={{ cursor: 'pointer' }}
                            className="fa fa-trash fa-lg mt-2"></i>
                    </div> 
                    
                    {/* Twitt Body */}
                    <p style={{fontSize: '20px'}}> {twitt.body} </p> 
                    <hr /> 
                    
                    {/* Like & Dislike */}
                    <div className="d-flex">
                        <span style={{ width: '50%', borderRight: '1px solid #546e7a' }}>
                            <center
                                onClick={likeHandler}
                                style={{ cursor: 'pointer' }}>
                                <i className="fa fa-thumbs-o-up fa-lg"></i> Like {like}
                            </center>
                        </span>
                        <span style={{ width: '50%' }}>
                            <center
                                onClick={dislikeHandler}
                                style={{ cursor: 'pointer' }}>
                                <i className="fa fa-thumbs-o-down fa-lg"></i> Disike {dislike}
                            </center>
                        </span>
                    </div>
                </div> 
                } 
            </div> 
        </div> 
    ) 
} 

export default NewTwitt; 
