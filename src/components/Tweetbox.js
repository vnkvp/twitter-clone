import React, { useState } from 'react'
import db from '../firebase'
import { Avatar, Button } from '@material-ui/core'
import '../assets/Tweetbox.css'

function Tweetbox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        
        db.collection('posts').add({
            displayName: 'Oswaldo Inácio',
            username: 'vnkvp',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://pbs.twimg.com/media/EMXiSHoWkAANGKA.jpg'
        });

        setTweetMessage('');
        setTweetImage('');
    }

    return (
        <div className='tweetbox'>
            <form>
                <div className='tweetboxInput'>
                    <Avatar
                        src='https://pbs.twimg.com/media/EMXiSHoWkAANGKA.jpg' />
                    <input placeholder="What's happening?" type='text'
                        value={tweetMessage} onChange={e => setTweetMessage(e.target.value)}></input>
                </div>
            <input className='tweetboxImageInput'
                placeholder="Optional: Enter your image URL"
                type='text' value={tweetImage} onChange={e => setTweetImage(e.target.value)}></input>
            <Button type='submit' onClick={sendTweet} className='tweetboxTweet'>Tweet</Button>
            </form>
        </div >
    )
}

export default Tweetbox
