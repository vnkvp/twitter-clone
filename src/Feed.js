import React from 'react'
import Tweetbox from './Tweetbox'
import Post from './Post'
import './assets/Feed.css'

function Feed() {
    return (
        <div className='feed'>
            <div className='feedHeader'>
                <h2>Home</h2>
            </div>
            <Tweetbox />
            <Post
                displayName='Oswaldo Inacio'
                username='vnkvp'
                verified
                text='sup'
                image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F3l02rhocss051.jpg&f=1&nofb=1'
                avatar='https://pbs.twimg.com/media/EMXiSHoWkAANGKA.jpg'
            />
        </div>
    )
}

export default Feed
