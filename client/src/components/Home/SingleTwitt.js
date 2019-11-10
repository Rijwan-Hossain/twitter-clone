import React, {useState} from 'react' 
import {useSelector, useDispatch} from 'react-redux' 
import avatar from '../../assets/images/avatar.jpg' 
import moment from 'moment' 
import axios from 'axios' 
import { 
    likeTwitt, 
    dislikeTwitt, 
    deleteTwitt
} from '../../store/actions/twittAction' 


function SingleTwitt({twitt}) { 
    console.log(twitt);
    let { author: user, _id: id } = twitt

    let [click, setClick] = useState(true) 

    let {user: loggedInUser} = useSelector(state => state.auth) 
    let dispatch = useDispatch()

    const likeHandler = () => { 
        setClick(false)
        if(click) {
            dispatch(likeTwitt(id))
        } 
    } 

    const dislikeHandler = () => { 
        setClick(false)
        if(click) {
            dispatch(dislikeTwitt(id))
        } 
    } 

    const deleteHandler = (id) => {
        if(loggedInUser.id === id) {
            dispatch(deleteTwitt(twitt._id))
        } 
    } 

    return ( 
        <div> 
            { twitt.display === 'public' && 
            <div 
                style={{
                    border: '1px solid #e0e0e0',
                    borderRadius: '5px', 
                    padding: '20px', 
                    marginBottom: '20px'
                }}> 
                {/* avatar & name */}
                <div className="d-flex"> 
                    <img 
                        src={user.avatar ? user.avatar : avatar} 
                        height="50px"
                        width="50px"
                        alt={user.name} /> 
                    <div>
                        <h5 style={{marginLeft: '15px'}}> 
                            { user.name } 
                        </h5> 
                        <p style={{
                            marginLeft: '15px', 
                            fontSize: '12px', 
                        }}>
                            {moment(twitt.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                        </p>
                    </div> 
                    { loggedInUser.id === user._id &&
                    <div className="d-flex mt-1 ml-auto">
                        
                        <i className="fa fa-edit fa-lg"></i>
                        <i 
                            onClick={() => deleteHandler(user._id)}
                            style={{marginLeft: '10px', cursor: 'pointer'}}
                            className="fa fa-remove fa-lg"></i>
                    </div> 
                    }
                </div> 
                

                {/* twitt body */} 
                <p className="text-lead" 
                    style={{
                        fontSize: '20px', 
                        borderBottom: '1px solid rgb(220, 220, 220)', 
                        paddingBottom: '10px'
                        }}>
                    {twitt.body}
                </p> 


                {/* Like & Dislike */}
                <div className="d-flex">
                    <span style={{
                            width: '50%', 
                            borderRight: '1px solid rgb(220, 220, 220)',

                        }}> 
                        <center>
                            <i 
                                className="fa fa-thumbs-up fa-lg"
                                onClick={likeHandler}
                                style={{
                                    cursor: click ? 'pointer' : 'not-allowed', 
                                    color: 'rgb(0, 220, 0)'
                                }} 
                            /> {twitt.upVote > 1 ? `${twitt.upVote} likes` : `${twitt.upVote} like`}
                        </center>
                    </span> 
                    <span style={{width: '50%'}}>
                        <center>
                        <i 
                            className="fa fa-thumbs-down fa-lg" 
                            onClick={dislikeHandler}
                            style={{
                                cursor: click ? 'pointer' : 'not-allowed',
                                color: 'rgb(220, 30, 30)'
                            }} 
                        /> {twitt.downVote > 1 ? `${twitt.downVote} likes` : `${twitt.downVote} dis-like`}
                        </center>
                    </span>
                </div>
            </div> 
            } 
        </div> 
    )
}

export default SingleTwitt
