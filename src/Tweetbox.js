import React from 'react'
import { Avatar, Button } from '@material-ui/core'
import './assets/Tweetbox.css'

function Tweetbox() {
    return (
        <div className='tweetbox'>
            <form>
                <div className='tweetboxInput'>
                    <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Portrait_of_Max_Stirner.svg/220px-Portrait_of_Max_Stirner.svg.png' />
                    <input placeholder="What's Happening?" type='text'></input>
                    <input placeholder="Enter your image URL" type='text'></input>
                </div>
                <Button className='tweet'>Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
