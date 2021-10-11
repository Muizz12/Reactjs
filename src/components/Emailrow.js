import React from 'react'
import { Checkbox, IconButton } from '@material-ui/core'
import './Emailrow.css'
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { selectmail } from '../features/mailSlice'
function Emailrow({ id, title, subjet, description, time }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const openmail = () => {
        dispatch(selectmail({
            id,
            title,
            subjet,
            description,
            time,

        }))
        history.push('/mail')
    }
    return (
        <div onClick={openmail} className='emailrow'>
            <div className="emailrow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>
            <div className="emailrow__title">
                <h3>{title}</h3>
            </div>
            <div className="emailrow__message">
                <h4>{subjet} {" "}
                    <span className="emailrpw__description">
                        {description}
                    </span>
                </h4>

            </div>
            <p className="emailrpw__time">
                {time}

            </p>

        </div>
    )
}

export default Emailrow
