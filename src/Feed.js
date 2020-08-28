import React from 'react'
import Tweetbox from './Tweetbox'
import Post from './Post'
import './assets/Feed.css'

function Feed() {
return (
        <div className='feed'>
            {/* Header */}
            <div className='feedHeader'>
                <h2>Home</h2>
            </div>
            {/* tweetbox */}
            <Tweetbox />
            {/* posts */}
            <Post />
        </div>
    )
}

export default Feed
