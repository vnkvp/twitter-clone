import React, { useState, useEffect } from 'react'
import Tweetbox from './Tweetbox'
import Post from './Post'
import db from '../firebase'
import '../assets/Feed.css'

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data())
            )))
    }, []);

    return (
        <div className='feed'>
            <div className='feedHeader'>
                <h2>Home</h2>
            </div>
            <Tweetbox />
            {posts.map(post => (
            <Post
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
        />    
            ))}
        </div>
    )
}

export default Feed
