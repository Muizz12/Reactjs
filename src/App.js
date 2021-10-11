import React from 'react';

import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Login from './components/Login'
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import Sendmail from './components/Sendmail';
import { useSelector } from 'react-redux';
import { selectsendMessageisOpen } from './features/mailSlice';
import { SelectUser } from './features/userSlice';
import { useDispatch } from 'react-redux'
import { auth, provider } from './Firebase'
import { login } from './features/userSlice'



function App() {
  const sendMessagesOpen = useSelector(selectsendMessageisOpen)
  const user = useSelector(SelectUser)
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayname: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        }))
      }
    })

  }, [])
  return (
    <Router>
      {!user ? (<Login />) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path='/mail'>
                <Mail />
              </Route>
              <Route path='/'>
                <EmailList />
              </Route>
            </Switch>
          </div>
          {sendMessagesOpen && <Sendmail />}

        </div>
      )}


    </Router>



  );
}

export default App;
