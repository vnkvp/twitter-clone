import React from 'react'
import { Avatar } from '@material-ui/core'
import './assets/Posts.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'

function Posts({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className='posts'>
            <div className='postAvatar'>
                <Avatar
                    src='https://pbs.twimg.com/media/EMXiSHoWkAANGKA.jpg'
                />
            </div>
            <div className='postBody'>
                <div className='postHeader'>
                    <div className='postHeaderText'>
                        <h3>
                            oswaldo {" "}
                            <span>
                                <VerifiedUserIcon className='postBadge' />
                            </span>
                        </h3>
                    </div>
                    <div className='postHeaderDescription'>
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts
