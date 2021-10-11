import { Checkbox, IconButton } from '@material-ui/core'
import { ChevronLeft, ChevronRight, Inbox, KeyboardHide, MoreVert, Redo, Settings } from '@material-ui/icons'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PeopleIcon from '@material-ui/icons/People';
import React, { useEffect, useState } from 'react'
import { db } from '../Firebase';
import './EmailList.css'
import Emailrow from './Emailrow';
import Section from './Section';

function EmailList() {
    const [Email, setemail] = useState([])
    useEffect(() => {
        db.collection('emails')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapsjot) =>
                setemail(snapsjot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))
                )
            );
    }, [])
    return (
        <div className="emaillist">
            <div className="emaillist__settings">
                <div className="emaillist__settingsleft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />

                    </IconButton>
                </div>
                <div className="emaillist__settingsright">
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
            </div>
            <div className="emaillist__sections">
                <Section Icon={<Inbox />} title='Primary' color='red' selected />
                <Section Icon={<PeopleIcon />} title='People' color='#1A73E8' />
                <Section Icon={<LocalOfferIcon />} title='Promotions' color='green' />
            </div>
            <div className="emaillist__list">
                {Email.map(({ id, data: { to, subject, timestamp, message } }) => (
                    <Emailrow
                        id={id}
                        key={id}
                        title={to}
                        subjet={subject}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                        description={message} />
                ))}
            </div>
        </div>
    )
}

export default EmailList
