import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import { db } from '../Firebase';
import firebase from 'firebase'

import './Sendmail.css'
function Sendmail() {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors }, } = useForm();
    const onSubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add({
            to: formData.To,
            subject: formData.Subject,
            message: formData.Message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),

        });
        dispatch(closeSendMessage());

    }

    return (
        <div className='sendmail'>
            <div className="sendmail__header">
                <h3>New Message</h3>
                <Close className='sendmail__close' onClick={() => dispatch(closeSendMessage())} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input

                    placeholder="To"
                    type="email"
                    {...register('To', { required: true })}
                />
                {errors.To && <p className="sendMail_error">To is required !</p>}
                <input

                    placeholder="Subject"
                    type="text"
                    {...register('Subject', { required: true })}
                />
                {errors.Subject && <p className="sendMail_error">To is required !</p>}


                <input

                    placeholder="Message"
                    ype="text"
                    className='sendmail__message'
                    {...register('Message', { required: true })}
                />
                {errors.Message && <p className="sendMail_error">To is required !</p>}

                <div className="sendmail__options">
                    <Button
                        className='sendmail__send'
                        varient='contained'
                        color='primary'
                        type='submit'
                    >
                        Send
                    </Button>
                </div>

            </form>

        </div>
    )
}

export default Sendmail
