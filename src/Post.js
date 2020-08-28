import React from 'react'
import './assets/Post.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import { Avatar } from '@material-ui/core'

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className='post'>
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
                                <VerifiedUserIcon fontSize='small' className='postBadge' />
                            </span>
                        </h3>
                    </div>
                    <div className='postHeaderDescription'>
                        <p>hello</p>
                    </div>
                    <img
                        src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F3l02rhocss051.jpg&f=1&nofb=1'
                        alt='strong-doge' className='postImage' />
                    <div className='postFooter'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
