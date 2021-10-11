import { IconButton } from '@material-ui/core'
import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldLessTwoTone, UnfoldMore, WatchLater } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { selectOpenMail } from '../features/mailSlice'

import './Mail.css'
function Mail() {
    const history = useHistory();
    const selector = useSelector(selectOpenMail);
    return (
        <div className='mail'>
            <div className="mails__tool">
                <div className="mails__toolleft">
                    <IconButton onClick={() => {
                        history.push('/')
                    }}>
                        <ArrowBack />
                    </IconButton>
                    <IconButton>
                        <MoveToInbox />
                    </IconButton>
                    <IconButton>
                        <Error />
                    </IconButton>
                    <IconButton>
                        <Delete />
                    </IconButton>
                    <IconButton>
                        <Email />
                    </IconButton>
                    <IconButton>
                        <WatchLater />
                    </IconButton>
                    <IconButton>
                        <CheckCircle />
                    </IconButton>
                    <IconButton>
                        <LabelImportant />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="mails__toolright">
                    <IconButton>
                        <UnfoldMore />
                    </IconButton>
                    <IconButton>
                        <Print />
                    </IconButton>
                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                </div>


            </div>
            <div className="mails__body">
                <div className="mails__bodyHeader">
                    <h2>{selector?.subjet}</h2>
                    <LabelImportant className='mails__important' />
                    <p>{selector?.title}</p>
                    <p className='mails__time'>{selector?.time}</p>
                </div>
                <div className="mail__message">
                    <p>{selector?.description}</p>
                </div>

            </div>


        </div>
    )
}

export default Mail
