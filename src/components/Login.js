import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { auth, provider } from '../Firebase'
import './Login.css'
function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(login({
                    displayname: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                }))
            }).catch((error) => {
                alert(error)
            })
    }
    return (
        <div className='login'>
            <div className="login__container">
                <img src='https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-3-1.png' />
                <Button variant="contained" color="primary" onClick={signIn}>Login</Button>            </div>

        </div>
    )
}

export default Login
