import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { Avatar, IconButton } from '@material-ui/core'
import React, { useReducer } from 'react'
import './Sidebar.css'
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import NearMeIcon from "@material-ui/icons/NearMe";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import Sidebaroptions from './Sidebaroptions';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';
function Sidebar() {
    const dispatch = useDispatch()
    return (
        <div className='sidebar'>
            <Button onClick={() => dispatch(openSendMessage())}
                startIcon={<AddIcon fontSize='Large' />}
                className='sidebar__compose'
            >
                Compose
            </Button>
            <Sidebaroptions
                Icon={InboxIcon}
                Title='Inbox'
                number={100}
                selected={true} />
            <Sidebaroptions
                Icon={StarIcon}
                Title='Starred'
                number={100} />
            <Sidebaroptions
                Icon={AccessTimeIcon}
                Title='Snoozed'
                number={100} />
            <Sidebaroptions
                Icon={LabelImportantIcon}
                Title='Important'
                number={100} />
            <Sidebaroptions
                Icon={NearMeIcon}
                Title='Sent'
                number={100} />
            <Sidebaroptions
                Icon={NoteIcon}
                Title='Draft'
                number={100} />
            <Sidebaroptions
                Icon={ExpandMoreIcon}
                Title='More'
                number={100} />
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>

                </div>
            </div>


        </div>
    )
}

export default Sidebar
