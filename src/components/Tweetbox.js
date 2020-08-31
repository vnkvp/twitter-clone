import React from 'react'
import { Avatar, Button } from '@material-ui/core'
import '../assets/Tweetbox.css'

function Tweetbox() {
    return (
        <div className='tweetbox'>
            <form>
                <div className='tweetboxInput'>
                    <Avatar
                    src='https://pbs.twimg.com/media/EMXiSHoWkAANGKA.jpg' />
                    <input placeholder="What's happening?" type='text'></input>
                </div>
                <input className='tweetboxImageInput'
                    placeholder="Optional: Enter your image URL"
                    type='text'></input>
                <Button className='tweetboxTweet'>Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
