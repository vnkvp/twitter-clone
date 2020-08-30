import React from 'react'
import './assets/Post.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import PublishIcon from '@material-ui/icons/Publish'
import { Avatar } from '@material-ui/core'
import LikePost from './LikePost'

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
                            Oswaldo Inácio
                            {" "}
                            <span>
                                <VerifiedUserIcon className='postBadge' />
                            </span>
                            {" "}
                            <span className='postHeaderSpecial'>
                                {"@vnkvp"}
                            </span>
                        </h3>
                    </div>
                    <div className='postHeaderDescription'>
                        <p>Hello mfs</p>
                    </div>
                    <img
                        src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F3l02rhocss051.jpg&f=1&nofb=1'
                        alt='strong-doge' className='postImage' />
                    <div className='postFooter'>
                        <span>
                            <ChatBubbleOutlineIcon fontSize='small' />
                        </span>
                        <span>
                            <RepeatIcon fontSize='small' />
                        </span>
                        <span>
                            <LikePost />
                        </span>
                        <span>
                            <PublishIcon fontSize='small' />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
