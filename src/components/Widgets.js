import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTweetEmbed, TwitterFollowButton } from 'react-twitter-embed'
import '../assets/Widgets.css'

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgetsInput'>
                <SearchIcon className='widgetsSearchIcon' />
                <input placeholder='Search Twitter' type='text'></input>
            </div>
            <div className='widgetsWidgetContainer'>
                <h2>What's Happening</h2>
                <TwitterTweetEmbed tweetId={'19370237272'} />
                <TwitterTweetEmbed tweetId={'1299990798407282688'} />
                <TwitterFollowButton className='follow' screenName={'darkmetamorpho1'} />
            </div>
        </div>
    )
}

export default Widgets
