import React from 'react';
import './Sidebar.css';
import { Button } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className='sidebarTwitterIcon' />
            <SidebarOption active text='Home' Icon={HomeIcon} />
            <SidebarOption text='Explore' Icon={SearchIcon} />
            <SidebarOption text='Notifications' Icon={NotificationsNoneIcon} />
            <SidebarOption text='Messages' Icon={MailOutlineIcon} />
            <SidebarOption text='Bookmarks' Icon={BookmarkBorderIcon} />
            <SidebarOption text='Lists' Icon={ListAltIcon} />
            <SidebarOption text='Profile' Icon={PermIdentityIcon} />
            <SidebarOption text='More' Icon={MoreHorizIcon} />
            <Button variant='outlined' className='sidebarTweet' fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar;