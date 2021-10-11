import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'; import './Header.css'
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, SelectUser } from '../features/userSlice';
import { auth } from '../Firebase';

function Header() {
    const user = useSelector(SelectUser);
    const dispatch = useDispatch();
    const signout = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        })

    }
    return (
        <div className='header'>
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="" />

            </div>
            <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder='Search mail' />
                <ArrowDropDownIcon className='header__inputCaret' />
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signout} src={user?.photoURL} />
            </div>


        </div>
    )
}

export default Header
